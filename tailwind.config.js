/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileHome: "url(/assets/mobileHome.png)",
        tabletHome: "url(/assets/tabletHome.png)",
        desktopHome: "url(/assets/desktopHome.png)",
        mobileDestination: "url(/assets/mobileDestination.png)",
        tabletDestination: "url(/assets/tabletDestination.png)",
        desktopDestination: "url(/assets/desktopDestination.png)",
        mobileCrew: "url(/assets/mobileCrew.jpg)",
        tabletCrew: "url(/assets/tabletCrew.jpg)",
        desktopCrew: "url(/assets/desktopCrew.jpg)",
        mobileTechnology: "url(/assets/mobileTechnology.jpg)",
      },

      colors: {
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
      },

      fontFamily: {
        belleFair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
