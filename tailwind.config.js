/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "ownHomeBackgroundImage" : "url('/assets/home/background-home-desktop.jpg')",
        "ownHomeBackgroundImageMd" : "url('/assets/home/background-home-tablet.jpg')",
        "ownHomeBackgroundImageMobile" : "url('/assets/home/background-home-mobile.jpg')",
        "ownDestinationIamgeDesktop" : "url('/assets/destination/background-destination-desktop.jpg')",
        "ownCrewImageDesktop" : "url('/assets/crew/background-crew-tablet.jpg')",
        "ownCrewImageTablet" : "url('/assets/crew/background-crew-tablet.jpg')",
        "ownCrewImageMobile" : "url('/assets/crew/background-crew-mobile.jpg')",
        "ownTechnologyImageDesktop" : "url('/assets/technology/background-technology-desktop.jpg')",
        "ownTechnologyImageMobile" : "url('/assets/technology/background-technology-mobile.jpg')",
      },
      colors : {
        ownParaColor : "#D0D6F9",
        ownHeadColor : "#0B0D17",
        ownParaColor2 : "#686b6d",
      }
    },
  },
  plugins: [],
}
