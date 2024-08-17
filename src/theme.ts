import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    tigerOrange: {
      50: "#FFF9F6",
      500: "#FF5900",
    },
    darkGray: {
      500: "#070708",
      900: "#383733",
    },
    grey: {
      100: "#F4F3F0",
      700: "#797670",
      900: "#383733",
    },
  },
  fonts: {
    formula: "PP Neue Montreal, sans-serif",
    montreal: "PP Neue Montreal, sans-serif",
    body: "PP Neue Montreal, sans-serif",
  },
  fontSizes: {
    fh10XL: "108px",
    fh9XL: "80px",
    fh8XL: "64px",
    fh7XL: "52px",
    fh6XL: "40px",
    fh5XL: "36px",
    fh4XL: "32px",
    fh3XL: "28px",
    fh2XL: "24px",
    fhXL: "20px",
    fhLG: "18px",
    fhMD: "16px",
    fhSM: "14px",
    fhXS: "12px",
    fh2XS: "10px",

    mh6XL: "40px",
    mh5XL: "36px",
    mh4XL: "32px",
    mh3XL: "28px",
    mh2XL: "24px",
    mhXL: "20px",
    mhLG: "18px",
    mhMD: "16px",
    mhSM: "14px",
    mhXS: "12px",
    mh2XS: "10px",

    bodyL: "18px",
    bodyM: "16px",
    bodyS: "14px",
    bodyXS: "12px",
  },
  fontWeights: {
    ebold: 800,
    bold: 700,
    sbold: 600,
    medium: 500,
    normal: 400,
    light: 300,
  },
  styles: {
    global: {
      "@font-face": [
        {
          fontFamily: "PP Neue Montreal Book",
          src: `url('/assets/fonts/ppneuemontreal-book.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal Italic",
          src: `url('/assets/fonts/ppneuemontreal-italic.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal Thin",
          src: `url('/assets/fonts/ppneuemontreal-thin.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal Medium",
          src: `url('/assets/fonts/ppneuemontreal-medium.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal SemiBold italic",
          src: `url('/assets/fonts/ppneuemontreal-semibolditalic.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal Bold",
          src: `url('/assets/fonts/ppneuemontreal-bold.woff') format('woff')`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
      ],
    },
  },
});

export default theme;
