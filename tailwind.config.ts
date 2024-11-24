import type { Config } from 'tailwindcss';
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    container: {
      center: true,
    },
    extend: {}
  },

  plugins: [
    daisyui,
  ]
} satisfies Config;
