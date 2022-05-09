import { useEffect, useState } from "react"
import styled from "styled-components"
import defaultPic from "../../Assets/jhon-picture.svg"
import { getPhoto } from "../../Services/getPhoto"

const StyledImage = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;



@media (max-width: 768px) {
  width: 150px;
  height: 150px;
}
`

export default function Photo() {

    const [Pic, setPic] = useState(defaultPic)

    useEffect(() => {
        getPhoto().then(photo => setPic(photo)).catch(setPic(defaultPic))
    }, [])


    return (
        <StyledImage src={Pic} alt="Jhon smilling at the beach" />
    )
}
