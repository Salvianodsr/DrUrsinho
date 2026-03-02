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
                primary: {
                    DEFAULT: '#2A9D8F',
                    dark: '#1F7F73',
                    light: '#3AB8A8',
                    50: '#E6F7F5',
                    100: '#CCF0EB',
                    200: '#99E0D6',
                    300: '#66D1C2',
                    400: '#33C1AD',
                    500: '#2A9D8F',
                    600: '#228072',
                    700: '#1F7F73',
                    800: '#164D45',
                    900: '#0B2622',
                },
                coral: {
                    DEFAULT: '#E76F51',
                    dark: '#D4573A',
                    light: '#EC8B73',
                    50: '#FDF0ED',
                    100: '#FBE1DA',
                    200: '#F7C3B5',
                    300: '#F3A590',
                    400: '#EF876B',
                    500: '#E76F51',
                    600: '#D4573A',
                    700: '#A8432D',
                    800: '#7C3121',
                    900: '#501F15',
                },
                background: {
                    DEFAULT: '#F8F9FA',
                    white: '#FFFFFF',
                },
                text: {
                    primary: '#1A1A1A',
                    secondary: '#6C757D',
                },
                border: {
                    DEFAULT: '#E5E7EB',
                },
                success: '#22C55E',
                error: '#EF4444',
                warning: '#F59E0B',
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'h1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
                'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
                'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
                'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
            },
            borderRadius: {
                'card': '12px',
                'button': '8px',
                'lg': '16px',
            },
            boxShadow: {
                'card': '0 2px 12px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
                'button': '0 2px 8px rgba(42, 157, 143, 0.3)',
            },
        },
    },
    plugins: [],
}
export default config
