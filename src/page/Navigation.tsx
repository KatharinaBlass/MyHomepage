import { useState } from 'react'
import styled from 'styled-components'

export type NavigationItemData = {
  title: string
  id: string
}

const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @supports (backdrop-filter: blur(10px)) or
    (--webkit-backdrop-filter: blur(10px)) {
    & {
      background-color: ${(props) => props.theme.colors.background_transparent};
      backdrop-filter: blur(10px);
    }
  }

  @media (max-width: 450px) {
    display: none;
  }
`
const NavigationItem = styled.a<{ $isActive: boolean }>`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : 'black')};

  @media (min-width: 900px) {
    margin: 0 1%;
  }
`

export default function Navigation({ items }: { items: NavigationItemData[] }) {
  const [currentItem, setCurrentItem] = useState(items[0].title)

  return (
    <NavigationContainer>
      {items.map((i) => (
        <NavigationItem
          key={i.id}
          href={'#' + i.id}
          $isActive={currentItem === i.title}
          onClick={() => setCurrentItem(i.title)}
        >
          {i.title}
        </NavigationItem>
      ))}
    </NavigationContainer>
  )
}
