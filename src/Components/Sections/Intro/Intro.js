import styled from 'styled-components'
import { Flex } from '../../styles/Flex.styled'
import Hello from './Hello'
import Photo from './Photo'


const StyledIntro = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;


    @media(max-width: ${({ theme }) => theme.mobile}){
        display: flex;
        align-items: ${({align}) => align};
        flex-direction: ${({ layout }) => layout || 'column'};
  }
`
export default function Intro() {
    return (
        <StyledIntro layout="column-reverse" align="flex-start">
            <Flex justify="flex-start">
            <Hello />
            </Flex>
            <Flex justify="flex-end">
            <Photo />
            </Flex>
        </StyledIntro>
    )
}
