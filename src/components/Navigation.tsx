import { useState } from 'react'
import styled from 'styled-components'

export type NavigationItemData = {
  title: string
  link: string
}

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 2% 4%;
  display: flex;
  justify-content: center;
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
          href={i.link}
          $isActive={currentItem === i.title}
          onClick={(event) => {
            setCurrentItem(i.title)
            event.preventDefault()
          }}
        >
          {i.title}
        </NavigationItem>
      ))}
    </NavigationContainer>
  )
}
