import ButtonHollow from "../ButtonHollow";
import { Container } from "./style";


export default function Header(): JSX.Element {
  return(
    <Container>
      <main>
        <ul>
          <li>Home</li>
          <li>Portifolio</li>
          <li>Sobre</li>
        </ul>

        <ButtonHollow text="Contato"/>
      </main>
    </Container>
  )
}
