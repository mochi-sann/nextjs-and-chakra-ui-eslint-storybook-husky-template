import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints, mode } from "@chakra-ui/theme-tools"

import type { AppProps /* , AppContext */ } from "next/app"

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({
  global: (props: AppProps) => ({
    body: {
      color: mode("#16161D", "#f8f8f2")(props),
      bg: mode("white", "#282a36")(props),
    },
  }),
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  config,
})

export default theme
