import { StyledSkill } from "./Skill.styled"
export default function Skill({ skill, borderColor, logo }) {

    return (
        <StyledSkill borderColor={borderColor}>
            {/* <img src={logo} alt={skill + " logo"} /> */}
        
        <span>{logo}</span>
        <span>{skill}</span></StyledSkill>
    )
}
