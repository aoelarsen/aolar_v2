/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            colors: {
                primary: '#1D212E',
                secondary: '#F9F7F5',
            },
        },
    },
    plugins: [],
};
