import React from 'react'
import Logo from '../NavBar/Logo/Logo'
import SocialIcons from '../SocialIcons'
import { Flex } from '../styles/Flex.styled'
import { Section } from '../styles/Section.styled'
import { SiReact, SiNetlify, SiStyledcomponents } from 'react-icons/si'
import { StyledFooter } from '../styles/Footer.styled'
export default function Foooter() {
  return (
    <Section>
      <StyledFooter>
        <div>
          <Logo />
          <Flex justify="center">
            <SocialIcons />
          </Flex>
          <Flex layout="row" justify="end">
            <p>Website build using:</p>
            <SiReact color='#61DAFB' size={20} />
            <SiNetlify color='#00C7B7' size={20} />
            <SiStyledcomponents color='#DB7093' size={30} />
          </Flex>
        </div>
        <Flex layout="row">
          <ul>
            <li>About</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Donate</li>
            <li>Projects</li>
          </ul>
        </Flex>
      </StyledFooter>
    </Section>
  )
}
