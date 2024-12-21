/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/app/kadai2/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                'bp': '600px',
            },
            colors: {
                kbp: "#ff0000",
            },
        },
    },
    plugins: [],
};