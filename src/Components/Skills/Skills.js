import { Flex, Grid } from "../index"
import { CurrentSkills, ComingSkills } from "../../utils/Constants/Skills.constans"
import Skill from "./Skill/Skill"
export function Skills() {
  return (
    <Grid template="1fr 1fr" gap="10px">

      <Flex direction="column">
        <div>
          <h4>Skills 🚀</h4>
          <p>I feel confident and comfortable with this skills</p>
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
          <h4>Coming Soon 💡</h4>
          <p>I have a basic foundation of this skills but still learning them</p>
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
