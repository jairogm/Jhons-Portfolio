import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../styles/Button.styled'
import { Flex } from '../styles/Flex.styled'
import { Section } from '../styles/Section.styled'
import { IoDocumentTextOutline, IoEyeOutline } from "react-icons/io5"
import Project from '../Project'
import styled from "styled-components";

const StyledProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 40px 0;



    @media(max-width: ${({ theme }) => theme.mobile}){
        display: flex;
        align-items: ${({align}) => align};
        flex-direction: ${({ layout }) => layout || 'column'};
  }
`

export default function ProjectsSection() {
    return (
        <Section>
            <Flex justify="space-between" layout=" ">
                <h4>Projects</h4>
                <Flex layout=" ">
                    <ButtonSecondary>
                        <Flex layout=" " justify="center">
                            <IoDocumentTextOutline size={20} />
                            <span>Resume</span>
                        </Flex>
                    </ButtonSecondary>
                    <ButtonPrimary>
                        <Flex layout=" " justify="center">
                            <IoEyeOutline size={20} />
                            <span>View All</span>
                        </Flex>
                    </ButtonPrimary>
                </Flex>
            </Flex>
            <StyledProjectSection>
                <Flex layout="column" align="flex-start">
                   <Project />
                   <Project />
                   <Project />
                   <Project />
                </Flex>
                <Flex layout="column" align="flex-end">
                   <Project />
                   <Project />
                   <Project />
                   <Project />
                </Flex>
            </StyledProjectSection>

            <hr/>
        </Section>
    )
}
