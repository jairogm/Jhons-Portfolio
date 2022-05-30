import separatorsvg from "../../Assets/Separator.svg";
import { Flex } from "../layouts/Flex";

export  function Separator() {
  return (
    <Flex align="center" justify="center" margin="40px 0">
    <img src={separatorsvg} alt="three dots indicating separation" />
    </Flex>
  )
}
