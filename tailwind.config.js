/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'monserrat': ['Montserrat', 'sans-serif'],
            },

            colors: {

                // greener
                "primary": "#ffffff",
                "secondary": "#000000",

                "accent-light": "#eeffdd",
                "accent": "#66ddbb",
                "accent-dark": "#084455",

                // greeny
                // "primary": "#f5f5f5",
                // "secondary": "#000000",

                // "accent-light": "#8db48e",
                // "accent": "#8db48e",
                // "accent-dark": "#4d724d",

            },

            screens: {
                'xs': '320px',    // phones
                'sm': '640px',    // phones
                'md': '768px',    // tablets, small laptops
                'lg': '1000px',   // tablets, small laptops
                'xl': '1200px',   // laptops, desktops and upwards
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}