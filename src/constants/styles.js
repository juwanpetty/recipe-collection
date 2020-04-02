import { createGlobalStyle } from "styled-components"

export const color = {
  // palette
  primary: "#007aff",

  // monochrome
  black: "#414141",
  gray9: "#717171",
  gray8: "#b7b7b7",
  gray7: "#ededed",
  gray6: "#fafafa",
  white: "#ffffff",
}

export const spacing = {
  padding: {
    xsmall: 8,
    small: 12,
    xmedium: 16,
    medium: 32,
    large: 48,
    xlarge: 60,
  },
  borderRadius: {
    small: 1,
    medium: 3,
    large: 6,
  },
}
export const typography = {
  family: {
    displayBold: "Libre Baskerville",
    primary: `-apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    code: `monospace`,
  },
  weight: {
    regular: "400",
    medium: "600",
    bold: "700",
  },
  size: {
    s1: 1.2,
    s2: 1.4,
    m1: 1.6,
    m2: 1.8,
    m3: 2.1,
    l1: 3.2,
    l2: 4.8,
    l3: 6.4,
    xl1: 8,
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${color.black};
    font-family: ${typography.family.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
