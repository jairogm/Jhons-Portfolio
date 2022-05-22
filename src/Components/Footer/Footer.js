import { Text } from '@chakra-ui/react'
import React from 'react'
import { Flex } from '../layouts/Flex'
import SocialIcons from '../SocialIcons/SocialIcons'
import { StyledFooter } from './Footer.styled'
import { FaSpotify } from "react-icons/fa"

export default function Footer() {
    return (
        <StyledFooter>
            <Flex mobileDirection="column" align="center" justify="space-between" gap="10px" margin="0 0 40px">
                <Flex align="center" gap="5px">
                    <FaSpotify size={20} />
                    <Text>
                        <b> Not playing</b>
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
