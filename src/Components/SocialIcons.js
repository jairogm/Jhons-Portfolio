import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import { SiPolywork } from "react-icons/si"
import { Flex } from "./styles/Flex.styled"

export default function SocialIcons() {
  return (

    <Flex layout="row">
      <FiGithub size={30} />
      <FiInstagram size={30} />
      <FiLinkedin size={30} />
      <SiPolywork size={30} />
    </Flex>


  )
}
