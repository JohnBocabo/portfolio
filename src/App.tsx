

import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'
import Projects from './components/projects'
import Skills from './components/skills'
import './index.css'
function App() {
  return (
    <div className="scroll-smooth">
      <div className='container max-w-[1200px] mx-auto px-4'>
        <Nav />
        <Hero />
        <div className='my-10 h-[5px] w-full rounded-sm '></div>
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
