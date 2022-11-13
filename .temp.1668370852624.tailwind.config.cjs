/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'media',
    theme: {
        fontFamily: {
            sans: ['Rubik', ...defaultTheme.fontFamily.sans],
            serif: ['Lora', ...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                primary: '#1D212E',
                secondary: '#F9F7F5',
            },
        },
    },
    plugins: [],
};
