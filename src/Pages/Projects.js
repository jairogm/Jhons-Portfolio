import { Heading } from '@chakra-ui/react'
import {IoDocumentTextOutline} from "react-icons/io5"
import { ButtonSecondary, Flex, Footer, StyledLink } from '../Components'
import ProjectsList from '../Components/Projects/ProjectsList'
import { Projects as AllProjects } from '../utils/Constants/Projects.constant'
export function Projects() {
  return (

    <>
      <Flex justify="space-between" margin=" 0 0 20px 0 ">
        <Flex>
          <Heading size="lg">Projects</Heading>
        </Flex>
        <Flex gap="20px">
          <StyledLink to="/cv/cv-jhon-garces-montes-en.pdf" target="_blank"><ButtonSecondary><IoDocumentTextOutline size={20} />Resume</ButtonSecondary></StyledLink>
        </Flex>
      </Flex>
      <ProjectsList AllProjects={AllProjects} />
      <hr />
      <Footer />
    </>
  )
}
