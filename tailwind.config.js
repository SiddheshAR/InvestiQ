/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // fontSize:{
      //   'heading-size':'',
      //   'subHeading-size': '27px',
      //   'default-size':'22px'
      // },
      // colors:{
      //   'heading-color':'rgb(34,34,34)',
      //   'subHeading-color':'rgb(34,34,34)',
      //   'default-color':'rgb(102,102,102)'
      // },
      // fontWeight:{
      //   'heading-weight':'700',
      //   'subHeading-weight': '600',
      //   'default-weight':'400'
      // },
      // lineHeight:{
      //   'heading-lineHeight':'64px',
      //   'subHeading-lineHeight': '27px',
      //   'default-lineHeight':'24px'
      // }
    },

  },
  plugins: [],
};
