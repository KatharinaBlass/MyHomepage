import styled from 'styled-components'

type ButtonProps = {
  children: string
  type: ButtonType
  onClickHandler: () => void
  leadingIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}
export enum ButtonType {
  Primary,
  Secondary,
  Text,
}

const BaseButton = styled.button`
  // reset button-tag styles
  border: 0;
  background-color: transparent;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.s};
  position: relative;
  height: 2.75rem;
  padding: ${(props) => props.theme.spacings.m};
  font-size: ${(props) => props.theme.fontSizes.m};

  > * {
    // makes icon and label text rendered above background
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${(props) => props.theme.colors.primaryDark};
    border: 2px solid ${(props) => props.theme.colors.primaryDark};
    border-radius: 2rem;
  }

  &:hover {
    cursor: pointer;

    &::before {
      filter: brightness(1.35);
    }
  }

  &:active::before {
    filter: brightness(0.65);
  }
`

const FilledButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.onPrimary};
`

const OutlinedButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bold;

  &::before {
    background-color: transparent;
  }

  &:hover& > * {
    filter: brightness(1.35);
  }

  &:active& > * {
    filter: brightness(0.65);
  }
`

const TextButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bold;

  &::before {
    background: transparent;
    padding: 0;
    border: none;
  }

  &:hover& > * {
    filter: brightness(1.35);
  }

  &:active& > * {
    filter: brightness(0.65);
  }
`

export default function Button(props: ButtonProps) {
  switch (props.type) {
    case ButtonType.Primary:
      return (
        <FilledButton>
          {props.leadingIcon && <props.leadingIcon />}
          {props.children && <span>{props.children}</span>}
        </FilledButton>
      )

    case ButtonType.Secondary:
      return (
        <OutlinedButton>
          {props.leadingIcon && <props.leadingIcon />}
          {props.children && <span>{props.children}</span>}
        </OutlinedButton>
      )

    case ButtonType.Text:
      return (
        <TextButton>
          {props.leadingIcon && <props.leadingIcon />}
          {props.children && <span>{props.children}</span>}
        </TextButton>
      )
    default:
      return <button>{props.children}</button>
  }
}
