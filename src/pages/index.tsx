import {
  Link as ChakraLink,
  Heading,
  Flex,
  Center,
  Icon,
} from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"

import Layout from "~/src/components/Layout"
import { CTA } from "~/src/components/CTA"

import { DarkModeSwitch } from "../components/DarkModeSwitch"

const Index = () => (
  <Layout>
    {/* <Hero /> */}

    <Heading>
      <Flex>
        <ChakraLink isExternal href="https://chakra-ui.com">
          Chakra-ui
        </ChakraLink>{" "}
        Template{" "}
        <Center>
          <Icon as={FaReact} w={10} h={10} color="#0693E3" />
        </Center>{" "}
      </Flex>
    </Heading>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    <CTA />
  </Layout>
)

export default Index
