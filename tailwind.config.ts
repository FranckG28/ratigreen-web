import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        yellowColor: '#F3CC31',
        primaryColor: '#2D1B69',
        progressBlue: '#57C8F2',
        pinkColor: '#E779C1',
        hoverColor: '#20134E'
      },
      boxShadow: {
        yellowColor: '0px 0px 25px 0.5px #F3CC31',
        buttonHoverColor: '0px 1px 30px 2px #F3CC31',
      },
    },
  },
  plugins: [],
}
export default config
