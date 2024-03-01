import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.text};
  padding: ${(props) => `${props.theme.spacings.xs} ${props.theme.spacings.s}`};
  font-size: ${(props) => props.theme.fontSizes.s};

  &:last-of-type {
    margin: 0;
  }
`

export default function Chip({ children }: { children: string }) {
  return <ContentWrapper>{children}</ContentWrapper>
}
