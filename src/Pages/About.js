import { Navbar } from "../Components/Header/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { Container, Section } from "../Components"
import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"
import SocialIcons from "../Components/SocialIcons/SocialIcons"
import { useMemo } from "react"
import getRandomItem from "../Services/getRandomItem"

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

`

const ImageList = () => [
  {
    key: "0",
    alt: "Me and some friends haging up at Manhattan - New York",
  },
  {
    key: "1",
    alt: "Visiting the Capitol - Washington, DC",
  },
  {
    key: "2",
    alt: "Community College Initiative Colombian Group - Bogota, Colombia",
  },
]


export function About() {
  const getImage = useMemo(() => {

    return getRandomItem(ImageList())

  }, [])


  return (
    <Container>
      <GlobalStyles />

      <Navbar />

      <Section>
        <h3>About Me</h3>
        <Image>
          <img  src={require(`../Assets/about/ab-${getImage.key}.jpg`)} alt={getImage.alt} />
          {/* Caption */}
          <small>{getImage.alt}</small>
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
