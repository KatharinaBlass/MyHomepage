import styled from 'styled-components'
import './App.css'
import Navigation, { NavigationItemData } from './page/Navigation'
import Home from './page/Home'
import Education from './page/Education'
import Projects from './page/Projects'
import Work from './page/Work'
import Footer from './page/Footer'

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
      title: 'Projects',
      id: 'projects',
    },
    {
      title: 'Work experience',
      id: 'work',
    },
    {
      title: 'Education',
      id: 'edu',
    },
  ]

  return (
    <AppContent>
      <Navigation items={navItems} />
      <Home id={navItems[0].id} />
      <Projects id={navItems[1].id} />
      <Work id={navItems[2].id} />
      <Education id={navItems[3].id} />
      <Footer />
    </AppContent>
  )
}

export default App
