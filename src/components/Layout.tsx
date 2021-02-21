import React, { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"
// import NextLink from "next/link"
import Head from "next/head"

import Header from "~/src/components/Header"
interface Props  {
  children?: ReactNode
  title?: string
  HiidenHeader?: boolean
}

const Layout = ({ children, title = "タイトル", HiidenHeader = false }: Props) => {
  // const { colorMode } = useColorMode()
  return (
    <Box minHeight="100vh">
      <Head>
        <title>もちのさいと</title>
      </Head>
      {HiidenHeader ? null : <Header />}

      {/* 本文 */}
      <Container maxW="800px">{children}</Container>
      <Box h="200px"></Box>

      
    </Box>
  )
}
export default Layout
