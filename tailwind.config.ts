import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-body':
          'linear-gradient(129deg, #996DFF 8.18%, #633BBC 95.51%)',
      },
      colors: {
        gray: {
          '1': '#D9D9D9',
          '2': '#565E6D',
          '3': '#252C3A',
          '4': '#1D2330',
          '5': '#181D28',
          '6': '#161A24',
        },
        'green-light': '#ABF770',
        'green-dark': '#5CAD1D',
        'red-light': '#F77070',
        'red-dark': '#AB3030',
      },
    },
  },
  plugins: [],
}
export default config
