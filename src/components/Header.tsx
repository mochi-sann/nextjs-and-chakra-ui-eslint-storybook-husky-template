import React from "react"
import { Flex, Box, Center, Heading, Container, useColorMode, useColorModeValue, Spacer, IconButton } from "@chakra-ui/react"
import NextLink from "next/link"
// import Image from "next/image"

import { MoonIcon, SunIcon } from "@chakra-ui/icons"

type HeaderProps = {
  position?: any
}

export default function Header({ position = "sticky" }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      h="55px"
      position={position}
      w="100%"
      top="0"
      left="0"
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("gray.300", "gray.700")}
      // boxShadow="md"
      p="2"
      style={{ backdropFilter: "blur(2px)" }}
      zIndex="100"
    >
      <Container maxW="800px">
        <Flex h="100%">
          <NextLink href="/">
            <a>
              <Box h="100%">
                <Center h="100%">
                  <Heading as="h1" fontSize="4xl">
                    👋HEY
                  </Heading>
                </Center>
              </Box>
            </a>
          </NextLink>
          <Spacer />
          <Center>
            <IconButton aria-label={colorMode === "light" ? "chenge Light mode" : "chenge Dark mode"} icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
          </Center>
        </Flex>
      </Container>
    </Flex>
  )
}
