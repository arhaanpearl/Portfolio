
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


function App() {
  return (
    <div className="font-inter bg-light text-dark">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App