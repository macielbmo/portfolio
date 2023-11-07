import Header from "../../components/Header";
import ButtonFilled from "../../components/ButtonFilled";
import SkillCard from "../../components/SkillCard";
import ProjectCard from "../../components/ProjectCard";
import ContatoCard from "../../components/ContatoCard";

import { AboutSection, ContactSection, Container, PresentationSection, ProjectSection, SkillsSection } from "./style"

import image from "../../assets/img/foto-main-png.png"
import sobreImg from "../../assets/img/foto-sobre-png.png"
import juroCompImg from '../../assets/img/img-project/juros-compostos.png'
import rotaAereaImg from '../../assets/img/img-project/rota-aerea.png'
import emProducaoImg from '../../assets/img/img-project/em-producao.png'

import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import { BiLogoReact, BiLogoJavascript, BiLogoTypescript, BiLogoHtml5, BiLogoCss3, BiLogoGit } from 'react-icons/bi'

export default function Home() {
  return(
    <Container>
      <Header />

      <main className="container-main">
        <PresentationSection id="section1">
          <div className="data information">
            <h3>Olá, eu sou o Maciel</h3>

            <h1>Desenvolvedor Front-End</h1>

            <a
              href="https://drive.google.com/file/d/1TxiAt7KWlPLAJYHvzLkCZ5eSIKs8UTCo/view?usp=sharing"
              target="_blank">
                <ButtonFilled text="Currículo"/>
            </a>
          </div>

          <div className="data image">
            <img src={image} alt="" />
          </div>
        </PresentationSection>

        <SkillsSection id="section2">
          <h1>Conhecimentos</h1>

          <div className="box-skill">
            {dataSkills.map(skill => (
              <SkillCard
                key={skill.id}
                icon={skill.icon}
                color={skill.color}
                title={skill.title}
                description={skill.description}
              />
            ))}
           </div>
        </SkillsSection>

        <AboutSection id="section3">
          <div className="data-about img-about">
            <img src={sobreImg} alt="" />
          </div>

          <div className="data-about content-about">
            <h1>Sobre</h1>
            <p>Possuo experiencia em atendimento ao cliente, adiquirida durante meu trabalho na UseCar Carsharing, empresa de tecnologia e locação de veículos.
              <br/>
              <br/>
              A um ano venho estudando e construindo projetos Front-end com React.js, JavaScript, TypeScript, Styled Components e consumo de APIs REST com a interface Fetch do JavaScript.
            </p>
          </div>
        </AboutSection>

        <ProjectSection id="section4">
            <h1>Meu Portifolio</h1>

            <div className="box-projetos">
              {dataProject.map(project => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  linkGitHub={project.linkGitHub}
                  linkProjeto={project.linkProjeto}
                  inProduction={project.inProduction}
                />
              ))}
            </div>
        </ProjectSection>

        <ContactSection id="section5">
          <div className="box-contacts">
            {dataContato.map(contato => (
              <ContatoCard
                key={contato.id}
                icon={contato.image}
                title={contato.title}
                description={contato.description}
                link={contato.link}
              />
            ))}
          </div>
        </ContactSection>
      </main>

      <footer className="footer">
        <p>© Feito por Maciel B. Martins</p>
      </footer>
    </Container>
  )
}

const dataSkills = [
  {
    id: 1,
    icon: <BiLogoReact />,
    color: '#5ED3F3',
    title: 'ReactJs',
    description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web...'
  },
  {
    id: 2,
    icon: <BiLogoJavascript/>,
    color: '#EFD81D',
    title: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
  },
  {
    id: 3,
    icon: <BiLogoTypescript/>,
    color: '#2F74C0',
    title: 'TypeScript',
    description: 'TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
  },
  {
    id: 4,
    icon: <BiLogoGit/>,
    color: '#E84D31',
    title: 'GIT',
    description: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software...'
  },
  {
    id: 5,
    icon: <BiLogoHtml5/>,
    color: '#F75421',
    title: 'HTML',
    description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores...'
  },
  {
    id: 6,
    icon: <BiLogoCss3/>,
    color: '#2862E9',
    title: 'CSS',
    description: 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML...'
  }
]

const dataProject = [
  {
    id: 1,
    image: juroCompImg,
    title: 'Calculadora de Juros Compostos',
    description: 'Projeto construido em HTML, CSS e JavaScript puro.',
    linkGitHub: 'https://github.com/macielbmo/calc-juros-compostos',
    linkProjeto: 'https://meujuroscompostos.netlify.app/',
    inProduction: false
  },
  {
    id: 2,
    image: rotaAereaImg,
    title: 'Rota Aérea',
    description: 'Site de noticias construido em ReactJs, com TypeScript, Styled-Components e outras tecnologias.',
    linkGitHub: 'https://github.com/macielbmo/calc-juros-compostos',
    linkProjeto: 'https://meujuroscompostos.netlify.app/',
    inProduction: true
  },
  {
    id: 3,
    image: emProducaoImg,
    title: 'Dev Shop',
    description: 'E-commerce onde o principal intuito é praticar Context API do ReactJs',
    linkGitHub: 'https://github.com/macielbmo/calc-juros-compostos',
    linkProjeto: 'https://meujuroscompostos.netlify.app/',
    inProduction: true
  }
]

const dataContato = [
  {
    id: 1,
    image: <AiOutlineMail/>,
    title: 'E-mail',
    description: 'macielbmo@gmail.com',
    link: ''
  },
  {
    id: 2,
    image: <AiOutlineWhatsApp/>,
    title: 'WhatsApp',
    description: '(31) 99557-9524',
    link: 'https://wa.me/5531995579524'
  },
  {
    id: 3,
    image: <AiOutlineLinkedin/>,
    title: 'Linkedin',
    description: '@macielbarboza',
    link: 'https://www.linkedin.com/in/macielbarboza/'
  },
  {
    id: 4,
    image: <AiFillGithub/>,
    title: 'GitHub',
    description: '@macielbmo',
    link: 'https://github.com/macielbmo'
  }
]
