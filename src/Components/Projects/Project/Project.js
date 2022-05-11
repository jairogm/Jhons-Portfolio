
import { Flex } from '../../index'
import { ProjectLink, StyledProject } from './Project.styled'

export default function Project({title, description, demoLink, sourceCode}) {
    return (
        <StyledProject>

            <h5>{title}</h5>
            <p> {description}</p>
            <Flex gap="10px">
          <ProjectLink href={demoLink} target="_blank">Demo</ProjectLink>
          <ProjectLink href={sourceCode} target="_blank">View Source Code</ProjectLink>
            </Flex>
        </StyledProject>
    )
}
