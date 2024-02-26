// purpose: add custom type for theme

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors
  }
}

type ThemeColors = {
  primary: string
  primaryDark: string
  background: string
  background_transparent: string
  text: string
}
