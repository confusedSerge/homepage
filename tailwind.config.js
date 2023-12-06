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
                'outfit': ['Outfit', 'sans-serif'],
                'space-grotesk': ['Space Grotesk', 'sans-serif']
            },

            colors: {

                // Summer Red
                // "primary": "#f6f6f6",
                // "secondary": "#1a1e24",
                // "accent": "#EE6352",

                // Cyan
                "primary": "#f6f6f6",
                "secondary": "#1a1e24",
                "accent": "#D0FFD6",
            },

            screens: {
                'xs': '320px',    // phones
                'sm': '640px',    // phones
                'md': '768px',    // tablets, small laptops
                'lg': '1000px',   // tablets, small laptops
                'xl': '1200px',   // laptops, desktops and upwards
            },

            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },

                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },

            },

            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                spin: 'rotate 1.5s linear infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}