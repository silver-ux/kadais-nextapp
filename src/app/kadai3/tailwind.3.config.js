/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/app/kadai3/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                "bp": '834px',
            },
            colors: {
                kbp: "#ff0000",
            },
        },
    },
    plugins: [],
};