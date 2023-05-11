import { Text } from '@chakra-ui/react'
import React from 'react'
import { Flex } from '../layouts/Flex'
//import SocialIcons from '../SocialIcons/SocialIcons'
import { StyledFooter } from './Footer.styled'
//import { FaSpotify } from "react-icons/fa"
//import { getNowPlaying } from '../../lib/spotify'
export default function Footer() {

    // useEffect(() => {

    //     getNowPlaying().then(res => res.json())
    //     .then(data => setData(data))
    //     .catch(err => console.log(err))

    // }, [])
    return (
        <StyledFooter>
            <Flex justify="center" align="center">
                <Text mt={6}>Jhon Jairo Garces Montes © 2023</Text>
            </Flex>

        </StyledFooter>
    )
}
