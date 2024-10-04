/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo': "#FFEED0",
        'corHeader' : "#FEFEFE",
      },
      backgroundImage: {
        'bgMain' : "url(src/assets/main/fundoMain.png)",        
        'bgEscolher' : "url(src/assets/main/fundoEscolher.png)",        
        'bgContato' : "url(src/assets/main/fundoContact.png)",        
      },
      screens: {
        '4k': '2560px',
      },
    },
  },
  plugins: [],
}

