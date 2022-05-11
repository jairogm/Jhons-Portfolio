import { ButtonPrimary, ButtonSecondary } from "../Button/Button.styled"
import { Flex, Grid } from "../index"
import { IoDocumentTextOutline } from "react-icons/io5"
import Project from "./Project/Project"
import { Projects as AllProjects } from "../../utils/Constants/Projects.constant"
export default function Projects() {
    return (
        <>
            <Flex justify="space-between" margin=" 0 0 20px 0 ">
                <Flex>
                    <h3>Projects</h3>
                </Flex>
                <Flex gap="20px">
                    <ButtonSecondary><IoDocumentTextOutline size={20} />Resume</ButtonSecondary>
                    <ButtonPrimary>View All</ButtonPrimary>
                </Flex>
            </Flex>
            <Grid template="1fr 1fr" placeItems="center" gap="20px" margin="0 0 40px  0">
                {
                    AllProjects.map((project, index) => <Project key={index} {...project} />)
                }
            </Grid>
        </>
    )
}
