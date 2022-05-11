import React from 'react'
import { Flex } from '../layouts/Flex'
import { StyledLink } from '../Link/Link.styled'
import { Logo } from '../Logo/Logo'
import { Anchor, FooterList, StyledFooter } from './Footer.styled'

export default function Footer() {
    return (
        <StyledFooter>
            <Flex direction="column" mobileDirection="column">
                <Logo />
        
            </Flex>

            <Flex justify="end">
                <FooterList>

                    <li><StyledLink to="/about">About</StyledLink></li>
                    <li><StyledLink to="/contact">Contact</StyledLink></li>
                    <li><StyledLink to="/Blog">Blog</StyledLink></li>
                    <li><StyledLink to="/Projects">Projects</StyledLink></li>
                    <li><Anchor href='https://example.com' target="_blank" rel='noreferrer'>Donate</Anchor></li>
                </FooterList>
            </Flex>

        </StyledFooter>
    )
}
