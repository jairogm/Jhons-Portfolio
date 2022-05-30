import { ButtonSecondary } from "../Button/Button.styled"
import { Flex } from "../index"
import { IoDocumentTextOutline } from "react-icons/io5"
import { Heading, Text } from "@chakra-ui/react"
import { StyledLink } from "../Link/Link.styled"
import { Projects as AllProjects } from "../../utils/Constants/Projects.constant"

import ProjectsList from "./ProjectsList"
export default function Projects() {
    const FeaturedProjects = AllProjects.slice(0,4); 
    return (
        <>
            <Flex justify="space-between" margin=" 0 0 20px 0 ">
                <Flex>
                    <Heading size="lg">Featured Projects</Heading>
                </Flex>
                <Flex gap="20px">
                    <StyledLink to="/cv/cv-jhon-garces-montes-en.pdf" target="_blank"><ButtonSecondary><IoDocumentTextOutline size={20} />Resume</ButtonSecondary></StyledLink>
                </Flex>
            </Flex>
            {/* Featured Projects */}
            <ProjectsList AllProjects={FeaturedProjects}/>
            <StyledLink to="/projects"><Text margin="10px" _hover={{ transform: "scale(0.999)" }}>View All Projects <b>&rarr;</b></Text> </StyledLink>
        </>
    )
}
