import { Intro, Separator, Skills, Projects, Footer } from "../Components"
import GlobalStyles from "../GlobalStyles"

export function Home() {

  return (
    <>
      <GlobalStyles />
      <Intro />
      <Separator />
      <Projects />
      <Separator />
      <Skills />

      <hr />
      <Footer />
    </>
  )
}
