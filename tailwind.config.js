import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        slantTop: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
        slantBottom: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [daisyui],
}