import {

  Heading,


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
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      nextjs-and-chakra-ui-eslint-storybook-husky-template
      <Icon as={FaReact} w={10} h={10} color="#0693E3" />
    </Heading>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    <CTA />
  </Layout>
)

export default Index
