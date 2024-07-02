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
        'custom-ivory': '7px 7px 3px ivory',
        'custom-darkgoldenrod': '7px 7px 3px darkgoldenrod',
        'custom-palevioletred': '7px 7px 3px palevioletred',
        'custom-mediumslateblue': '7px 7px 3px mediumslateblue'
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
        light : {
            '0%' : {opacity : '1'}, 
            '50%' : {opacity : '0.6'}, 
            '100%' : {opacity : '1'},         
        }
      },
      animation : {
        'meteorAnimate' : 'meteorKeyframes 4s ease-in infinite',
        'starLight' : 'light 2.5s ease-in infinite'
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
export default config;
