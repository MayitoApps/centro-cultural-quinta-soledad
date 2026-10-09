import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cantera: {
          50: "#FDFBF7",
          100: "#F9F6F0",
          200: "#F2ECE0",
          300: "#E6DBC8",
          400: "#D5C4A6",
          500: "#BEA781",
        },
        charcoal: {
          950: "#0D0C0B",
          900: "#141312",
          850: "#1A1918",
          800: "#242220",
          700: "#34312D",
          600: "#4D4944",
          500: "#6B6660",
        },
        gold: {
          300: "#E5D2B5",
          400: "#D8BF96",
          500: "#C5A880",
          600: "#A9895B",
          700: "#896D44",
        },
        olive: {
          900: "#1C241D",
          800: "#2D3A2F",
          700: "#3D4E40",
          600: "#506554",
        },
        terracotta: {
          500: "#9E4733",
          600: "#823725",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        heritage: ".18em",
      },
    },
  },
  plugins: [],
} satisfies Config;
