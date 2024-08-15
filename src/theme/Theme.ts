import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkGray: {
      500: "#070708",
      900: "#383733",
    },
    grey: {
      700: "#797670",
      900: "#383733",
    },
  },
  fonts: {
    heading: "PP Neue Montreal Book, sans-serif",
    body: "PP Neue Montreal Book, sans-serif",
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
