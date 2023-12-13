import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'brown': '#B57A50',
      'grey': '#F3F3F3',
      'darkgrey': 'rgb(209, 213, 219)',
      'darkblue': '#18253C',
      'seagreen': '#D9E5E2',
      'black': '#1E1E1E',
      'darkgray': '#858585',
      'lightblue': '#CCD5E4',
      'peach': '#F4D2BA'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
