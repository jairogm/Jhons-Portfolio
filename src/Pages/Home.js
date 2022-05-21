import { Navbar, Intro, Container, Section, Separator, Skills, Projects, Footer } from "../Components"
import GlobalStyles from "../GlobalStyles"

export function Home() {

  return (
    <>
      <Container>
        <GlobalStyles />
        <Navbar />
        <Section>
          <Intro />
        </Section>
        <Separator />
        <Section>
          <Projects />
        </Section>
        <Separator />
        <Section>
          <Skills />

          <hr />
        </Section>
        <Section>
          <Footer />
        </Section>
      </Container>
    </>
  )
}
