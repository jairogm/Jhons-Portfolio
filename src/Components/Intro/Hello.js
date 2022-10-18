import { useEffect, useState } from "react"
import styled from "styled-components"
import { Heading, Text } from "@chakra-ui/react"
import { getInfo } from "../../Services/getInfo"
const StyledHello = styled.div`
    width:400px;
    max-width: 100%;
    line-height: 1.5;
`



export default function Hello() {
const [user, setUser] = useState({})
  
useEffect(() => {
  getInfo().then(info => setUser(info)).catch(setUser(defaultInfo))
}, [])
  return (
    <StyledHello>
      <Heading mb={2} size="xl">{user.name}</Heading>
      <Text fontSize='md' mb={3}>
        React Developer at <b>{user.company}</b>
      </Text>
      <Text fontSize="md" mb={2}>{user.bio}</Text>
    </StyledHello>
  )
}
