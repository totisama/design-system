import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'border-error': '#e03c39',
        background: '#ffffff',
        'background-hover': '#f0f3f4',
        'border-subtle-00': '#d1d9dd',
        'border-subtle-01': '#566370',
        'border-interactive': '#1076dd',
        'text-primary': '#101419',
        'text-secondary': '#566370',
        'text-placeholder': '#a9a9a9',
        'text-on-color': '#1076dd',
        'text-error': '#e03c39',
        'text-button': '#ffffff',
        'text-success': '#24A148',
        link: '#1076dd',
        'icon-secondary': '#1076dd',
        'icon-tertiary': '#566370',
        'icon-on-color-disabled': '#a9a9a9',
        'icon-error': '#e03c39',
        'icon-warning': '#fccd27',
        'icon-success': '#24a148',
        'button-primary': '#1076dd',
        'button-primary-hover': '#0764c1',
        'button-primary-active': '#1076dd',
        'button-secondary': '#101419',
        'button-secondary-hover': '#282c30',
        'button-secondary-active': '#101419',
        'button-tertiary': '#ffffff',
        'button-tertiary-hover': '#e7e7e7',
        'button-tertiary-active': '#ffffff',
        'button-primary-disabled': '#a4ccf4',
        white: '#ffffff',
        black: '#000000',
        'notification-success-background': '#DEFBE6',
        'notification-error-background': '#E03C39',
        'notification-warning-background': 'FCF4D6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
