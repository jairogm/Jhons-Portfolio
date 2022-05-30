
import { Box, Heading, Text } from '@chakra-ui/react'
import { Flex } from '../../index'
import {  ProjectLink, StyledProject } from './Project.styled'

export default function Project({ title, description, demoLink, sourceCode, borderColor }) {
  
    return (
            <StyledProject borderColor={borderColor}>
                <Box padding="20px" borderRadius="10px" width="100%">
                <Heading size="md" mb={2} fontWeight="400">{title}</Heading>
                <Text mb={2}> {description}</Text>
                <Flex gap="10px">
                    <ProjectLink href={demoLink} target="_blank">Demo</ProjectLink>
                    <ProjectLink href={sourceCode} target="_blank">View Source Code</ProjectLink>
                </Flex>
                </Box>
            </StyledProject>
    )
}
