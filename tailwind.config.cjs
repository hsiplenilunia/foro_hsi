/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Geologica', 'sans-serif']
    },
    extend: {
      colors: {
        purple: "#7758AC",
        'purple-text': "#7244B4",
        apple: "#CCF750",
        guacamole: "#C2D293",
        'guacamole-light': "#D9E4BB",
        'apple-dark':"#B7D280",
        'pink-fresh':"#F8C5FE",
        'black-text': "#231F20",
        'blue-text': "#204356",
        capuchino: "#EBE5DD",
        'light-text': "#FAF9F9",
        'navy': "#144157",
        'light-gray':"#f2f2f2",
        'gray-hsi': "#808080",
        'bg-gray': "#e9e9e9",
        'hsi-blue': "#00ccf2",
        'celeste-hsi': "#00bbe7",
        'green-hsi': "#25A64B",
        'registro-hsi': "#00B0E4",
        'btn-registro-concurso': "#0AB1E5",
        'btn-registro-concurso-hover': "#1D5168",
        'btn-bases-concurso': "#D9D9D9",
        'btn-bases-concurso-hover': "#D9D9D9",

        // Gradiente actualizado — 6 colores Figma
        'gradient-start':   "#67AC51",  // 0%
        'gradient-2':       "#55AC69",  // 11%
        'gradient-3':       "#2AAEA7",  // 34%
        'gradient-4':       "#00B0E4",  // 54%
        'gradient-5':       "#26617A",  // 89%
        'gradient-end':     "#334756",  // 100%
      },

      // Gradiente listo para usar como clase de Tailwind
      backgroundImage: {
        'gradient-hsi': `linear-gradient(
          to right,
          #67AC51 0%,
          #55AC69 11%,
          #2AAEA7 34%,
          #00B0E4 54%,
          #26617A 89%,
          #334756 100%
        )`,
      },

// tailwind.config.mjs
export default {
  theme: {
    extend: {
      backgroundImage: {
        
        // El nuevo gradiente exclusivo para el texto del Concurso
        // Usamos un azul brillante y un tono cian para alta legibilidad
        'gradient-concurso': 'linear-gradient(to right, #07A2D2, #000000)',
      },
    },
  },
};



    },
  },
  plugins: [],
}