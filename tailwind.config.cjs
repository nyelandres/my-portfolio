/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sofia: ["Sofia Sans"],
            },
            height: {
              37: "37.5rem",
            },
            margin:{
              "0-auto": "0 auto",
            },
            borderRadius:{
              "50%": "50%",
            },
        },
    },
    plugins: [],
};
