import { Flex, Grid } from "../index"
import { CurrentSkills, ComingSkills } from "../../utils/Constants/Skills.constans"
import Skill from "./Skill/Skill"
import { Heading, Text } from "@chakra-ui/react"
export function Skills() {
  return (
    <Grid template="1fr 1fr" gap="10px" margin="0 0 60px">

      <Flex direction="column">
        <div>
          <Heading  size="lg" mb={3}>Skills 🚀</Heading>
          <Text mb={4}>I feel confident and comfortable with this skills</Text>
        </div>
        <Flex gap="10px">
          {
            CurrentSkills.map(({ skill, color, logo }, index) => {
              return (
                <Skill key={index} skill={skill} borderColor={color} logo={logo} />
              )
            })
          }
        </Flex>
      </Flex>
      <Flex direction="column">
        <div>
          <Heading size="lg" mb={3}>Coming Soon 💡</Heading>
          <Text mb={4}>I have a basic foundation of this skills but still learning them</Text>
        </div>
        <Flex gap="10px">
          {
            ComingSkills.map(({ skill, color, logo }, index) => {
              return (
                <Skill key={index} skill={skill} borderColor={color} logo={logo} />
              )
            })
          }
        </Flex>
      </Flex>
    </Grid>
    
  )
}
