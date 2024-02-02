import { useState } from 'react'
import styled from 'styled-components'

export type NavigationItemData = {
  title: string
  id: string
}

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5% 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @supports (backdrop-filter: blur(10px)) or
    (--webkit-backdrop-filter: blur(10px)) {
    & {
      background-color: #f8f8fadd;
      backdrop-filter: blur(10px);
    }
  }
`
const NavigationItem = styled.a<{ $isActive: boolean }>`
  margin: 0 1%;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#33a8c5' : 'black')};
`

export default function Navigation({ items }: { items: NavigationItemData[] }) {
  const [currentItem, setCurrentItem] = useState(items[0].title)

  return (
    <NavigationContainer>
      {items.map((i) => (
        <NavigationItem
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
