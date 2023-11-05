import Header from "../../components/Header"
import ButtonFilled from "../../components/ButtonFilled"
import SkillCard from "../../components/SkillCard"

import { Container, Main } from "./style"

import image from "../../assets/img/foto-main-png.png"
import sobreImg from "../../assets/img/foto-sobre-png.png"

import html from "../../assets/img/icons-skills/html-5.png"
import css from "../../assets/img/icons-skills/css-3.png"
import reactjs from "../../assets/img/icons-skills/react2.png"
import js from "../../assets/img/icons-skills/js.png"
import ts from "../../assets/img/icons-skills/ts.png"
import git from "../../assets/img/icons-skills/git.png"
import ProjectCard from "../../components/ProjectCard"

import juroCompImg from '../../assets/img/img-project/juros-compostos.png'

export default function Home() {
  return(
    <Container>
      <Header />

      <Main>
        <section className="presentation-section">
          <div className="data information">
            <h3>Olá, eu sou o Maciel</h3>

            <h1>Desenvolvedor Front-End</h1>

            <ButtonFilled text="Currículo"/>
          </div>

          <div className="data image">
            <img src={image} alt="" />
          </div>
        </section>

        <section className="skills-section">
          <h1>Conhecimentos</h1>

          <div className="box-skill">
            {dataSkills.map(skill => (
              <SkillCard
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
           </div>
        </section>

        <section className="about-section">
          <div className="data-about img-about">
            <img src={sobreImg} alt="" />
          </div>

          <div className="data-about content-about">
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam tempora numquam sint odit optio.
<br />
<br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae?</p>
          </div>
        </section>

        <section className="projects-section">
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
        </section>
      </Main>
    </Container>
  )
}

const dataSkills = [
  {
    id: 1,
    icon: reactjs,
    title: 'ReactJs',
    description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web...'
  },
  {
    id: 2,
    icon: js,
    title: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
  },
  {
    id: 3,
    icon: ts,
    title: 'TypeScript',
    description: 'TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
  },
  {
    id: 4,
    icon: git,
    title: 'GIT',
    description: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software...'
  },
  {
    id: 5,
    icon: html,
    title: 'HTML',
    description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores...'
  },
  {
    id: 6,
    icon: css,
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
    image: juroCompImg,
    title: 'Rota Aérea',
    description: 'Site de noticias construido em ReactJs, com TypeScript, Styled-Components e outras tecnologias.',
    linkGitHub: 'https://github.com/macielbmo/calc-juros-compostos',
    linkProjeto: 'https://meujuroscompostos.netlify.app/',
    inProduction: true
  },
  {
    id: 2,
    image: juroCompImg,
    title: 'Dev Shop',
    description: 'E-commerce onde o principal intuito é praticar Context API do ReactJs',
    linkGitHub: 'https://github.com/macielbmo/calc-juros-compostos',
    linkProjeto: 'https://meujuroscompostos.netlify.app/',
    inProduction: true
  }
]
