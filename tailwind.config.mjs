import fluid, { extract, screens, fontSize } from 'fluid-tailwind'


/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
      // "./src/app/page.jsx",
      './src/**/*.{js,ts,jsx,tsx,mdx}',

    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens,
    fontSize,
  },
  // plugins: [fluid],
  plugins: [],
};
