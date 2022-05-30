import React from 'react'
import { StyledSocial, StyledSocialIcon } from './Social.styled'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { SiPolywork } from "react-icons/si"
export default function SocialIcons() {
    return (
        <StyledSocial>

            <ul>
                <StyledSocialIcon href="https://github.com/jairogm" target="_blank"><FiGithub size={30} /></StyledSocialIcon>
                <StyledSocialIcon href="https://www.linkedin.com/in/jhongarces/" target="_blank"><FiLinkedin size={30} /></StyledSocialIcon>
                <StyledSocialIcon href="https://instagram.com/jairogm_/" target="_blank"><FiInstagram size={30} /></StyledSocialIcon>
                <StyledSocialIcon href="https://www.example.com" target="_blank"><SiPolywork size={30} /></StyledSocialIcon>
            </ul>
        </StyledSocial >
    )
}
