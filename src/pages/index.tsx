import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react"

import dayjs from "dayjs"

import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { DarkModeSwitch } from "../components/DarkModeSwitch"

const Index = () => (
  <Container height="100vh">
    {/* <Hero /> */}
    <Main></Main>
    <p>
      dayjs().format("YYYY/MM/DD HH:mm:ss")
      {dayjs().format("YYYY/MM/DD HH:mm:ss")}
    </p>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    {/* <CTA /> */}
  </Container>
)

export default Index
