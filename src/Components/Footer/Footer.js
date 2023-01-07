import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Flex } from '../layouts/Flex'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Anchor, StyledFooter } from './Footer.styled'
import { FaSpotify } from "react-icons/fa"
import { getNowPlaying } from '../../lib/spotify'
export default function Footer() {

    const [data, setData] = useState(null)

    console.log(data)
    useEffect(() => {

        getNowPlaying().then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

    }, [])
    return (
        <StyledFooter>
            <Flex mobileDirection="column" align="center" justify="space-between" gap="10px" margin="0 0 40px">
                <Flex align="center" gap="5px">
                    <FaSpotify size={20} />
                    <Anchor href={ data ? data.item.external_urls.spotify : "#!"} target="_blank"><Text>
                        <b>{data ? <>{data.item.name} - {data.item.artists.map((artist)=> artist.name).join(', ')}</> : "Not Playing"}</b>
                    </Text></Anchor>
                    <Text color="#888"> - Spotify</Text>
                </Flex>
                <SocialIcons />
            </Flex>

            <Flex justify="center" align="center">
                <Text mt={6}>Jhon Jairo Garces Montes © 2023</Text>
            </Flex>

        </StyledFooter>
    )
}
