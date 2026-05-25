import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
