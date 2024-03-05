/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      lora: ["lora", "serif"],
      rubik: ["rubik", "sans-serif"],
    },
    fontSize: {
      xs: ["0.5rem", "120%"],
      sm: ["0.65rem", "120%"],
      md: ["0.8rem", "120%"],
      base: ["1rem", "120%"],
      lg: ["1.25rem", "120%"],
      xl: ["1.55rem", "120%"],
      "2xl": ["1.95rem", "120%"],
      "3xl": ["2.45rem", "120%"],
      "4xl": ["3.05rem", "120%"],
      "5xl": ["3.8rem", "120%"],
    },
    colors: {
      primary: {
        50: "#f4eeeb",
        100: "#dccbc2",
        200: "#cbb2a5",
        300: "#b48f7c",
        400: "#a57962",
        500: "#8f583b",
        600: "#825036",
        700: "#663e2a",
        800: "#4f3020",
        900: "#3c2519",
      },
      secondary: {
        50: "#fefdfc",
        100: "#fbf8f6",
        200: "#f9f5f1",
        300: "#f6f0eb",
        400: "#f5ede7",
        500: "#f2e9e1",
        600: "#dcd4cd",
        700: "#aca5a0",
        800: "#85807c",
        900: "#66625f",
      },
      ternary: {
        50: "#fbf9f7",
        100: "#f3ebe6",
        200: "#eee2d9",
        300: "#e6d4c8",
        400: "#e1ccbd",
        500: "#d9bfad",
        600: "#c5ae9d",
        700: "#9a887b",
        800: "#77695f",
        900: "#5b5049",
      },
      text: {
        50: "#e6e6e7",
        100: "#b2b1b4",
        200: "#8d8b90",
        300: "#59555d",
        400: "#39353d",
        500: "#07020d",
        600: "#06020c",
        700: "#050109",
        800: "#040107",
        900: "#030105",
      },
    },
    extend: {
      boxShadow: {
        main: "12px 12px 1px 0",
      },
    },
  },
  plugins: [],
};
