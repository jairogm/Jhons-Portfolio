import React from 'react'
import { Flex } from '../layouts/Flex'
import { StyledLink } from '../Link/Link.styled'
import { Logo } from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Anchor, FooterList, StyledFooter } from './Footer.styled'

import {SiReact, SiNetlify, SiStyledcomponents} from "react-icons/si"
export default function Footer() {
    return (
        <StyledFooter>
            <Flex direction="column" mobileDirection="column" align="center" justify="center">
                <Logo />
                <SocialIcons />
        <small>Website build using: <SiReact color='#61DAFB'/> <SiNetlify color='#25C7B7'/> <SiStyledcomponents color='#E535AB'/> </small>
            </Flex>

            <Flex justify="end">
                <FooterList>
                    <li><StyledLink to="/about">About</StyledLink></li>
                    <li><StyledLink to="/contact">Contact</StyledLink></li>
                    <li><StyledLink to="/Blog">Blog</StyledLink></li>
                    <li><StyledLink to="/Projects">Projects</StyledLink></li>
                    <li><Anchor href='https://www.buymeacoffee.com/jairogm' target="_blank" rel='noreferrer'>Donate</Anchor></li>
                </FooterList>
            </Flex>

        </StyledFooter>
    )
}
