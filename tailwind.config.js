/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx}",
    ],
    prefix: "",
    theme: {
        screens: {
            tiny: { max: "639px" },
            // => @media (min-width: 480px and max-width: 639px) { ... }
            sm: { min: "640px", max: "767px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            md: { min: "768px", max: "1023px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            lg: { min: "1024px", max: "1279px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }
            xl: { min: "1280px", max: "1535px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
            "2xl": { min: "1536px", max: "1919px" },
            // => @media (min-width: 1536px and max-width: 1919px) { ... }
            "3xl": { min: "1920px" },
            // => @media (min-width: 1920px) { ... }
        },
        extend: {
            colors: {
                "primary": "#3b82f6",
                "blue": "#1972f5",
                "white": "#FFFFFF",
                "title": "#1F2935",
                "text-description": "#4b5563",
            },
            backgroundColor: {
                "blue": "#1972f5",
                "white": "#FFFFFF",
            },
            fontFamily: {
                poppins: ['"Poppins"', 'sans-serif'],
                roboto: ['"Roboto"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};