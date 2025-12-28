tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Bricolage Grotesque', 'sans-serif'],
            },
            colors: {
                slate: {
                    850: '#151b28',
                    900: '#0f172a',
                    950: '#020617',
                },
                panel: {
                    DEFAULT: '#0f1623',
                    border: '#1e293b'
                }
            },
            animation: {
                'slide-in': 'slideIn 0.3s ease-out forwards',
                'fade-in': 'fadeIn 0.2s ease-out forwards',
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'scale(0.99)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                }
            }
        }
    }
}
