import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Flex } from '../layouts/Flex'
import SocialIcons from '../SocialIcons/SocialIcons'
import { StyledFooter } from './Footer.styled'
import { FaSpotify } from "react-icons/fa"
import { getNowPlaying } from '../../lib/spotify'
export default function Footer() {

    const [data, setData] = useState(null)
    useEffect(() => {
        getNowPlaying().then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        <StyledFooter>
            <Flex mobileDirection="column" align="center" justify="space-between" gap="10px" margin="0 0 40px">
                <Flex align="center" gap="5px">
                    <FaSpotify size={20} />
                    <Text>
                        <b>{data ? <>{data.item.name} - {data.item.artists[0].name}</> : "Not Playing"}</b>
                    </Text>
                    <Text color="#888"> - Spotify</Text>
                </Flex>
                <SocialIcons />
            </Flex>

            <Flex justify="center" align="center">
                <Text mt={6}>Jhon Jairo Garces Montes © 2022</Text>
            </Flex>

        </StyledFooter>
    )
}
