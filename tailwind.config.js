/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#06D666",    
        secondary: "#252A34",  
        tertiary: "#2196F3",   
        accent: "#DC143C",     
        textColor: "#444444", 
        bgColor: '#F2F5F3', 
        mutedForeground: "#6b7280",
      },
      screens: {
        'sm': '640px',  
        'md': '768px',   
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
