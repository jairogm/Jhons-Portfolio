import { Navbar, Intro, Container, Section, Separator } from "../Components"
import  GlobalStyles  from "../GlobalStyles"

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
      </Container>
    </>
  )
}
