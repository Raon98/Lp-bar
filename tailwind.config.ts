import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        '-125': '-125deg',
      },
      boxShadow: {
        'custom-meteor1': '2px 2px 8px #FFFFFF',
        'custom-meteor2': '2px 2px 8px #c77eff',
        'custom-meteor3': '2px 2px 8px #f6ff7e',
        'custom-meteor4': '2px 2px 8px #ff8d7e'
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

      },
      animation : {
        'meteorAnimate' : 'meteorKeyframes 4s ease-in infinite',
        'fadeIn' : 'light 1s linear 1 0s normal forwards'
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
export default config;
