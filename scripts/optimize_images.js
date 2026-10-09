const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');

function getAllImages(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllImages(fullPath));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImage(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = sharp(filePath);

    // Redimensionar si supera 1920px en ancho o alto
    const maxWidth = 1920;
    const maxHeight = 1920;

    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      pipeline = pipeline.resize({
        width: maxWidth,
        height: maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: 82,
        mozjpeg: true,
        chromaSubsampling: '4:2:0',
      });
    } else if (ext === '.png') {
      if (metadata.width <= 512 && metadata.height <= 512) {
        pipeline = pipeline.png({
          compressionLevel: 9,
          effort: 7,
        });
      } else {
        pipeline = pipeline.png({
          quality: 82,
          compressionLevel: 9,
          effort: 7,
        });
      }
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({
        quality: 82,
        effort: 6,
      });
    }

    const tempPath = filePath + '.opt.tmp';
    await pipeline.toFile(tempPath);

    const newSize = fs.statSync(tempPath).size;

    if (newSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      return {
        path: filePath,
        originalSize,
        newSize,
        saved: originalSize - newSize,
        status: 'optimized',
      };
    } else {
      fs.unlinkSync(tempPath);
      return {
        path: filePath,
        originalSize,
        newSize: originalSize,
        saved: 0,
        status: 'kept_original',
      };
    }
  } catch (err) {
    console.error(`Error procesando ${filePath}:`, err.message);
    return {
      path: filePath,
      originalSize,
      newSize: originalSize,
      saved: 0,
      status: 'error',
      error: err.message,
    };
  }
}

async function main() {
  console.log('Buscando imágenes en:', PUBLIC_DIR);
  const images = getAllImages(PUBLIC_DIR);
  console.log(`Encontradas ${images.length} imágenes para procesar.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;

  for (const img of images) {
    const res = await optimizeImage(img);
    totalOriginal += res.originalSize;
    totalNew += res.newSize;
    processed++;

    if (processed % 15 === 0 || processed === images.length) {
      const origMB = (totalOriginal / (1024 * 1024)).toFixed(1);
      const newMB = (totalNew / (1024 * 1024)).toFixed(1);
      const pct = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
      console.log(`[${processed}/${images.length}] Progreso: ${origMB}MB -> ${newMB}MB (-${pct}%)`);
    }
  }

  const origMB = (totalOriginal / (1024 * 1024)).toFixed(2);
  const newMB = (totalNew / (1024 * 1024)).toFixed(2);
  const savedMB = ((totalOriginal - totalNew) / (1024 * 1024)).toFixed(2);
  const pct = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(2);

  console.log('\n=== RESULTADO FINAL DE OPTIMIZACIÓN ===');
  console.log(`Total imágenes procesadas: ${images.length}`);
  console.log(`Peso original:  ${origMB} MB`);
  console.log(`Nuevo peso:     ${newMB} MB`);
  console.log(`Ahorro total:   ${savedMB} MB (-${pct}%)`);
}

main();
