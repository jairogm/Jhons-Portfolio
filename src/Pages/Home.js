import { ThemeProvider } from "styled-components";
import Foooter from "../Components/Sections/Foooter";
import Header from "../Components/Sections/Header";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import Skills from "../Components/Sections/Skills";
import { Container } from "../Components/styles/Container.styled";
import GlobalStyles from "../Components/styles/Global.styled";
import { Section } from "../Components/styles/Section.styled";
const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#fff',
  },
  mobile: '595px'
}

export function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Section>
            <Skills />
            <ProjectsSection />
          </Section>
          <Foooter/>
        </Container>
      </ThemeProvider>
    </>
  )
}