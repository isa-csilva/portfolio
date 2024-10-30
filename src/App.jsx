import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Hardskills from "./components/Hardskills"
import Footer from "./components/Footer"
import Projects from "./components/Projects"


const Background = styled.div`
  background: #151515;
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 90rem;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const App = () => {

  return (
    <Background>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Header />
        <AboutMe/>
        <Hardskills />
        <Projects />
        <Footer />
      </AppContainer>    
    </Background>
  )
}

export default App
