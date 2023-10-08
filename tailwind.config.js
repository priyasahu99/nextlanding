/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-white": "#fff",
        "neutral-silver": "#f5f7fa",
        "brand-primary": "#4caf4f",
        "text-gray-900": "#18191f",
        "neutral-black": "#263238",
        "text-gray-300": "#d9dbe1",
        "neutral-grey": "#717171",
        "neutral-d-grey": "#4d4d4d",
        "neutral-l-grey": "#89939e",
        gainsboro: "#e8e8e3",
        honeydew: "#e8f5e9",
      },
      spacing: {},
      fontFamily: {
        "label-medium-label": "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "45xl": "64px",
      "17xl": "36px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
