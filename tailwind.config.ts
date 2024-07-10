import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '440px'},
      },
      colors: {
        'gray-rgba-0.3': 'rgba(255,255,255,0.3)',
        'gray-rgba-0.5': 'rgba(255,255,255,0.5)',
        'gray-rgba-0.7': 'rgba(255,255,255,0.7)',
        'border-rgba-0.3': 'rgba(0,0,0,0.3)',

        matte: {
          purple: '#8748E1',
          green: '#65D35D',
          red: '#EF6363',
          skyblue: '#87CEEB',
          yellow: '#FFD700',
        },
      },
      backdropFilter : {
        '30' : '30px'
      },
      rotate: {
        '-125': '-125deg',
        '-45' : '-45deg'
      },
      boxShadow: {
        'custom-meteor1': '2px 2px 8px #FFFFFF',
        'custom-meteor2': '2px 2px 8px #c77eff',
        'custom-meteor3': '2px 2px 8px #f6ff7e',
        'custom-meteor4': '2px 2px 8px #ff8d7e',
        'custom-border' : '1px 10px 5px gainsboro',
        'custom-border-1' : '1px 2px 10px rgba(0,0,0,0.7)',
        'custom-border-2': '1px 1px 10px rgba(0,0,0,0.7)',
        'custom-border-3': '1px 2px 5px rgba(0,0,0,0.5)',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes : {
        meteorKeyframes: {
          '0%' : {top : '-10vh', transform : 'translateX(0px)', opacity : '1'},
          '100%': { top: '110vh', transform: 'translateX(100vh)', opacity: '1' },
        },
        fadeIn : {
            '0%' : {opacity : '0'}, 
            '100%' : {opacity : '1'}       
        },
        fadeOut : {
          '0%' : {opacity : '1'}, 
          '100%' : {opacity : '0'}       
        },
        switchStop : {
          '0%' : {transform : 'rotate(80deg)'}, 
          '100%' : {transform : 'rotate(0)'} 
        },
        spin : {
          '0%' : {transform : 'rotate(0) scale(1.2)',transformOrigin: 'center center' } , 
          '100%' : {transform : 'rotate(360deg) scale(1.2)',transformOrigin: 'center center'} 
        },
        spinStop : {
          '0%' : {transform : 'rotate(-360deg) scale(1.2)',transformOrigin: 'center center' } , 
          '100%' : {transform : 'rotate(0) scale(1.2)',transformOrigin: 'center center'} 
        },
        recodeUp : {
          '0%' : {marginTop : '90%'},
          '30%' : {marginTop : '60%'},
          '100%' : {marginTop : '300%'}
        },
        scale : {
          '0%' : {transform :'scale(1)' }, 
          '100%' : {transform :'scale(10)'}, 
        },
        mainArmSpin : {
          '0%' : { transform : 'translate(-120%, -12%)'},
          '100%' : { transform : 'translate(-120%, -12%) rotate(45deg)'},
        }
      },
      animation : {
        'meteorAnimate' : 'meteorKeyframes 4s ease-in infinite',
        'fadeIn' : 'fadeIn 1s linear 1 0s normal forwards',
        'fadeOut' : 'fadeOut 1s linear 1 0.2s normal forwards',
        'spin' : 'spin 2.5s linear infinite 0.5s normal',
        'spinStop' : 'spinStop 3s ease-out 1 0s normal forwards',
        'switchStop' : 'switchStop 0.5s linear 1 0s normal forwards',
        'introRecodeUp' : 'recodeUp 1.3s linear 1 0s normal forwards',
        'introScale' : 'scale 1s linear 1 0s normal forwards',
        'mainArmSpin' : 'mainArmSpin 0.5s linear 1 0s normal forwards'

      }
    },
  },
  plugins: [],
};
export default config;
