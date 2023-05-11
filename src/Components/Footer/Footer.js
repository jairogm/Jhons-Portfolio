import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Flex } from '../layouts/Flex'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Anchor, StyledFooter } from './Footer.styled'
import { FaSpotify } from "react-icons/fa"
import { getNowPlaying } from '../../lib/spotify'
export default function Footer() {

    const [data, setData] = useState(null)

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
