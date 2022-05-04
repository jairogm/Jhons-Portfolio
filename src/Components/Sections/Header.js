// import { StyledHeader } from '../styles/Header.styled'

import { Section } from '../styles/Section.styled'

import Intro from './Intro/Intro'
import Separator from '../Separator'
import NavBar from '../organisms/NavBar'

export default function Header() {
    return (
        <>
           <NavBar></NavBar>
            <Section>
                <Intro />
                <Separator />
            </Section>
        </>
    )
}
