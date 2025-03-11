const lynxPreset = require("@lynx-js/tailwind-preset");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  presets: [lynxPreset], // Use the preset
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths as needed
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {},
};
