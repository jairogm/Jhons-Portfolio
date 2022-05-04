import { BiUserCircle } from 'react-icons/bi'
import { ButtonPrimaryLarge } from '../../styles/Button.styled'
import { Flex } from '../../styles/Flex.styled'

export default function Hello() {
    return (
        <div>
           <Flex layout="column" align="flex-start">
           <h2>Hello There!</h2>
            <h4>
                I am Jhon Garces Montes
            </h4>
            <h5>
                Passionate and creative Front-End Developer based in Colombia 🇨🇴.
            </h5>
            <ButtonPrimaryLarge>
                <Flex layout=" "><BiUserCircle size={30}/>
                <span>More About me</span></Flex>
            </ButtonPrimaryLarge>
           </Flex>
        </div>
    )
}
