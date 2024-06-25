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
        'border-error': 'var(--red_60)',
        background: 'var(--white)',
        'background-hover': 'var(--gray_05)',
        'border-subtle-00': 'var(--gray_20)',
        'border-subtle-01': 'var(--gray_30)',
        'border-interactive': 'var(--blue_10)',
        'text-primary': 'var(--black_90)', //
        'text-secondary': 'var(--gray_30)',
        'text-placeholder': 'var(--gray_50)',
        'text-on-color': 'var(--blue_10)',
        'text-error': 'var(--red_60)',
        'text-button': 'var(--white)',
        'text-success': 'var(--green_60)',
        link: 'var(--blue_10)',
        'icon-secondary': 'var(--blue_10)',
        'icon-tertiary': 'var(--gray_30)',
        'icon-on-color-disabled': 'var(--gray_50)',
        'icon-error': 'var(--red_60)',
        'icon-warning': 'var(--yellow_60)',
        'icon-success': 'var(--green_60)',
        'button-primary': 'var(--blue_10)',
        'button-primary-hover': 'var(--blue_20)', //
        'button-primary-active': 'var(--blue_10)',
        'button-secondary': 'var(--black_90)', //
        'button-secondary-hover': 'var(--black_80)', //
        'button-secondary-active': 'var(--black_90)', //
        'button-tertiary': 'var(--white)',
        'button-tertiary-hover': 'var(--white_90)', //
        'button-tertiary-active': 'var(--white)',
        'button-primary-disabled': 'var(--blue_05)', //
        white: 'var(--white)',
        black: 'var(--black)',
        'notification-success-background': 'var(--green_20)',
        'notification-error-background': 'var(--red_60)',
        'notification-warning-background': 'var(--yellow_20)',
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
