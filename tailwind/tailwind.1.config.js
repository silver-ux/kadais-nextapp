/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/app/kadai1/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                hoge: "#ff0000",
            },
        },
    },
    plugins: [],
};