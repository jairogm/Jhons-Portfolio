import React from 'react'
import { Container, Flex, Footer, Grid, Navbar, Section } from '../Components'
import GetInTouch from "../Assets/get-in-touch.svg"
import styled from "styled-components"
import { Heading } from '@chakra-ui/react'
export function Contact() {

  const Anchor = styled.a`
  text-decoration: none;
  color: rgb(81, 130, 167);
  font-weight: 600;   
  `

  return (
    <Container>
      <Navbar />
      <Section>
        <Heading mb={4}>Let's Get in Touch!</Heading>
        <Grid template="1fr 1fr">
          <Flex justify="start" align="start">
            <h5>
              I'm always open for a conversation, so please don't hesitate contacting me!
            </h5>
            <h5>
              There is alwasy ways you can reach me:
            </h5>
            <ul>
              <li><h5><Anchor href='https://www.linkedin.com/in/jhongarces/' target="_blank" rel="noreferrer">Connect</Anchor> with me on LinkedIn</h5></li>
              <li><h5>Send me an <Anchor href='mailto:contact@jhongarces.dev' target="_blank" rel="noreferrer"> Email</Anchor></h5></li>
            </ul>
            <h5>Please don't just say hello :)</h5>
          </Flex>
          <Flex justify="center" align="center">

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
