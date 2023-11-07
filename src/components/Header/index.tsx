import ButtonHollow from "../ButtonHollow";
import { Container } from "./style";


export default function Header(): JSX.Element {
  const scrollToSection = (id: string) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return(
    <Container>
      <div className="list">
        <ul>
          <li onClick={() => scrollToSection('section1')}>Home</li>
          <li onClick={() => scrollToSection('section2')}>Conhecimento</li>
          <li onClick={() => scrollToSection('section3')}>Sobre</li>
          <li onClick={() => scrollToSection('section4')}>Portifolio</li>
        </ul>

        <div className="button" onClick={() => scrollToSection('section5')}>
          <ButtonHollow text="Contato"/>
        </div>
      </div>
    </Container>
  )
}
