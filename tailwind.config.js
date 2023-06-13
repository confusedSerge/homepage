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

                // White-Mode
                "primary": "#f6f6f6",
                "secondary": "#1a1e24",

                // Dark-Mode
                // "primary": "#1a1e24",
                // "secondary": "#f6f6f6",

                // Accent-Color
                // "accent": "#eeffdd", // green
                // "accent": "#fca311", // orange
                "accent": "#EE6352", // summer-red
                // "accent": "#EF3E36", // vermillion

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