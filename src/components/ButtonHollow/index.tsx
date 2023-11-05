import { Container } from "./style"

interface ButtonProps {
  text: string
}

export default function ButtonHollow(props: ButtonProps) {
  return(
    <Container>
      <button>{props.text}</button>
    </Container>
  )
}
