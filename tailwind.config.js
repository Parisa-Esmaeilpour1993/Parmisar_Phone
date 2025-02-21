/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { primary: { 100: "#B3C8CF", 200: "#89A8B2" } , secondary: { 100:"#F1F0E8", 200:"#E5E1DA"}},},
    
  },
  plugins: [],
};
