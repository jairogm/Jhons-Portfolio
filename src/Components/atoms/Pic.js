import { useEffect, useState } from 'react'
import getPic from '../../services/getPic'
import photo from "../../Assets/jhon-picture.svg"
import styled from "styled-components"

const Photo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

export default function Pic() {

    const [Profile, setProfile] = useState(photo)

    useEffect(() => {
        getPic().then(photo => setProfile(photo))
    }, [])



    return (
        <Photo src={Profile} alt="Jhon smiling at the beach " />
    )
}
