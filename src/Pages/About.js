import { Navbar } from "../Components/Header/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { Container, Section } from "../Components"
import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"
import SocialIcons from "../Components/SocialIcons/SocialIcons"
import { useMemo, useState } from "react"
import getRandomItem from "../Services/getRandomItem"
import { FiMaximize, FiMinimize } from "react-icons/fi"
const Image = styled.div` 
  width: 100%;
  height: 300px;
  margin: 0 auto;
  display: block;
  margin-bottom: 3rem;
  border: 1px solid #c4c4c4;
  position: relative;
  display: flex;
  justify-content: center;

  & > small {
    position: absolute;
    bottom: -20px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > button {
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #c4c4c4;
    color: #fff;
    border-radius:5px;
    padding: 5px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;

    overflow: hidden;
    transition: width 1s;
    &:hover {
      width:80px;
      
      
    }
    
    &:hover > span {
      
      display: block;
      transition:  0.5s ease-in-out;
    }
    
    & > span {
      display: none;
      transition: all 0.5s ease-in-out;
    }
  }



  transition: all 0.5s ease;
  
 ${({ active }) => active && `
    transition: all 0.5s ease;
    height: 500px;
  `}

`

const ImageList = () => [
  {
    key: "0",
    alt: "Me and some friends hanging out at Central Park - New York City, New York - 2021",
  },
  {
    key: "1",
    alt: "Visiting the Capitol - Washington, DC - 2021",
  },
  {
    key: "2",
    alt: "Community College Initiative Program Colombian Group - Bogota, Colombia - 2021",
  },
  {
    key: "3",
    alt: "Learning how to paint with friends - Alexandria, Virginia - 2021",
  },
  {
    key: "4",
    alt: "Sharing a Coffee with Friends at Hard Rock Cafe - San Francisco, California - 2018",
  },
  {
    key: "5",
    alt: "Playing with snow for the first time in life - Alexandria, Virginia - 2021",
  },
]


export function About() {

  const [OpenImg, setOpenImg] = useState(false)
  const getImage = useMemo(() => {

    return getRandomItem(ImageList())

  }, [])


  return (
    <Container>
      <GlobalStyles />

      <Navbar />

      <Section>
        <h3>About Me</h3>
        <Image active={OpenImg}>
          <img src={require(`../Assets/about/ab-${getImage.key}.jpg`)} alt={getImage.alt} />
          {/* Caption */}
          <small>{getImage.alt}</small>
          {!OpenImg ? <button onClick={() => setOpenImg(!OpenImg)}> <FiMaximize size={20} /><span>Resize</span></button>
            : <button onClick={() => setOpenImg(!OpenImg)}> <FiMinimize size={20} /><span>Close</span></button>
          }
        </Image>
      </Section>
      <Section>
        <article>
          <p>
            I’m Jhon Jairo Garces Montes, a front-end developer based in Colombia.
          </p>
          <p>
            I am creative and passionate about design and technology so I always try to craft great-looking software products 🎨
          </p>
          <p>
            Since I was a little boy and I got my first contact with a computer I got fascinated with technology, so I always looked for parts of computers, printers or even televisions and I repaired them or created little robots with them, they were not too functional but I was happy creating them.
          </p>
          <p>
            After a few years, I discovered programming and at that moment my entire life changed, I started to go earlier to my school just to play with computers, I remember I broke some of them trying to install Linux since my main focus back then was to pursue  a CyberSecurity Degree, so when my teacher started to punish me I decided to save money and buy my own. 👨‍💻
          </p>
          <p>
            When not coding, I like to watch TV shows and movies, play some games with friends or hang out with them 🤝 I'm also listening to music most of the time 🎧 According to Spotify Wrapped, I listened to <b>120260</b> minutes of music in 2021 😱
          </p>
          <p>
            I consider myself a curious and inquisitive person, so on my spare time I like to do some voluntering on my local commmuntity and learn something new to improve my skillset 🤓.
          </p>
          <p>
            Learn even more about me on my timeline and please don't hesitate to contact me!
          </p>
          <SocialIcons />
        </article>
      </Section>
      <hr />
      <Section>
        <Footer />
      </Section>

    </Container>
  )
}
