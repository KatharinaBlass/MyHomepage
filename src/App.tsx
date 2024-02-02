import styled from 'styled-components'
import './App.css'
import Navigation, { NavigationItemData } from './components/Navigation'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Work from './components/Work'
import Footer from './components/Footer'

const AppContent = styled.div`
  padding: 0 4%;
  background-color: #f8f8fa;
  position: relative;
`

function App() {
  const navItems: NavigationItemData[] = [
    {
      title: 'Home',
      id: 'home',
    },
    {
      title: 'Education',
      id: 'edu',
    },
    {
      title: 'Projects',
      id: 'projects',
    },
    {
      title: 'Work experience',
      id: 'work',
    },
  ]

  return (
    <AppContent>
      <Navigation items={navItems} />
      <Home id={navItems[0].id} />
      <Education id={navItems[1].id} />
      <Projects id={navItems[2].id} />
      <Work id={navItems[3].id} />
      <Footer />
    </AppContent>
  )
}

export default App
