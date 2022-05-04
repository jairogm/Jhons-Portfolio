import React from 'react'
import { Flex } from '../styles/Flex.styled'
import { Section } from '../styles/Section.styled'

import Separator from "../../Components/Separator"
import styled from "styled-components"


const StyledSkills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    & h4 {
        margin: 0;
    }

    & p {
        margin: 0 0 15px;
    }



    @media(max-width: ${({ theme }) => theme.mobile}){
        display: flex;
        align-items: ${({align}) => align};
        flex-direction: ${({ layout }) => layout || 'column'};
  }
   
`

function Skills() {
    return (
        <Section>
            <StyledSkills>
                {/* Column 1 (Skills) */}
                <Flex layout="column" align="flex-start">
                    <h4>Skills 🚀</h4>
                    <p>I feel confident and comfortable with this skills</p>
                    <Flex wrap="wrap" layout="row">
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                    </Flex>
                </Flex>
                {/* Column 2 (Coming Soon Skills) */}
                <Flex layout="column" align="flex-start">
                    <h4>Coming Soon 💡</h4>
                    <p>I have a basic foundation of this skills but still learning them </p>
                    <Flex wrap="wrap" layout="row">
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                        <button>Skill test</button>
                    </Flex>
                </Flex>
            </StyledSkills>
        <Separator/>
        </Section>
    )
}

export default Skills