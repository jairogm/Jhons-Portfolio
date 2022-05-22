import styled from "styled-components"
import { Heading, Text } from "@chakra-ui/react"
const StyledHello = styled.div`
    width:400px;
    max-width: 100%;
    line-height: 1.5;
`


export default function Hello() {
  return (
    <StyledHello>
      <Heading mb={2} size="xl">Jhon Garces Montes</Heading>
      <Text fontSize='md' mb={3}>
        React Developer at <b>Brick Lane</b>
      </Text>
      <Text fontSize="md" mb={2}>Passionate Front-End Developer based in Colombia </Text>
    </StyledHello>
  )
}
