import React from 'react'
import separator from "../Assets/Separator.svg"
import { Flex } from './styles/Flex.styled'




export default function Separator() {
    return (

        <Flex justify="center" align="center" margin=" 60px 0px 40px">
            <img src={separator} alt="dots" />
        </Flex>

    )
}
