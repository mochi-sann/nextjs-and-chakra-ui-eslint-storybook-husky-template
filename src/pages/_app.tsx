import { ChakraProvider } from "@chakra-ui/react"

import { AppProps } from "next/app"
import theme from "~/src/lib/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
