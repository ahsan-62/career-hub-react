/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
