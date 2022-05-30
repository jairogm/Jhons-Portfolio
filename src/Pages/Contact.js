import React from 'react'
import { Container, Flex, Footer, Grid, Navbar, Section } from '../Components'
import GetInTouch from "../Assets/get-in-touch.svg"
import styled from "styled-components"
import { Heading, Text } from '@chakra-ui/react'
export function Contact() {

  const Anchor = styled.a`
  text-decoration: none;
  color: rgb(81, 130, 167);
  font-weight: 600;   
  `

const List = styled.ul`
  list-style: none;
`
  return (
    <Container>
      <Navbar />
      <Section>
        <Heading mb={4}>Let's Get in Touch!</Heading>
        <Grid template="1fr 1fr">
          <Flex justify="start" align="start" Mobiledirection="column" gap="15px">
            <Text>
              I'm always open for a conversation, so please don't hesitate contacting me!
            </Text>
            <Text>
              There is alwasy ways you can reach me:
            </Text>
          <Text>
          <List>
              <li><Text>&rarr;  <Anchor href='https://www.linkedin.com/in/jhongarces/' target="_blank" rel="noreferrer">Connect</Anchor> with me on LinkedIn</Text></li>
              <li><Text>&rarr;  Send me an <Anchor href='mailto:contact@jhongarces.dev' target="_blank" rel="noreferrer"> Email</Anchor></Text></li>
            </List>
          </Text>
            <Text>Please don't just say hello :)</Text>
          </Flex>
          <Flex justify="center" align="center" margin="20px 0 0">
            <img src={GetInTouch} alt="" />
          </Flex>
        </Grid>
      </Section>
      <hr />
      <Section>
        <Footer />
      </Section>
    </Container>
  )
}
