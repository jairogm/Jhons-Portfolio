import { ButtonSecondary } from "../Button/Button.styled"
import { Flex, Grid } from "../index"
import { IoDocumentTextOutline } from "react-icons/io5"
import Project from "./Project/Project"
import { Projects as AllProjects } from "../../utils/Constants/Projects.constant"
import {  Heading, Text } from "@chakra-ui/react"
import { StyledLink } from "../Link/Link.styled"
export default function Projects() {
    return (
        <>
            <Flex justify="space-between" margin=" 0 0 20px 0 ">
                <Flex>
                    <Heading size="lg">Featured Projects</Heading>
                </Flex>
                <Flex gap="20px">
                    <ButtonSecondary><IoDocumentTextOutline size={20} />Resume</ButtonSecondary>
                </Flex>
            </Flex>
            <Grid template="1fr 1fr" placeItems="center" gap="20px" margin="0 0 20px">
                {
                    AllProjects.map((project, index) => <Project key={index} {...project} />)
                }
            </Grid>
            <StyledLink to="/projects"><Text margin="10px" _hover={{transform: "scale(0.999)"}}>View All Projects <b>&rarr;</b></Text> </StyledLink>
        </>
    )
}
