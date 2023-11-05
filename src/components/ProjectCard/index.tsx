import { Container } from "./stylex";

interface ProjetcCardProps {
  image: string,
  title: string,
  description: string,
  linkGitHub: string,
  linkProjeto: string,
  inProduction: boolean
}

export default function ProjectCard(props: ProjetcCardProps) {
  return(
    <Container>
      <div className="box-img-project">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="box-content-project">
        <div className="header">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>

        <div className="links">
          {!props.inProduction ? (
            <>
              <a target="_blank" href={props.linkGitHub}>GitHub</a>
              <a target="_blank" href={props.linkProjeto}>Ver projeto</a>
            </>
          ) : (
            <h4>Em produção...</h4>
          )}
        </div>
      </div>
    </Container>
  )
}
