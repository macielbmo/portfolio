import { Container } from "./style";

interface SkillCardProps {
  icon: string,
  title: string,
  description: string
}

export default function SkillCard(props: SkillCardProps) {
  return(
    <Container>
      <div className="box-img">
        <img src={props.icon} alt={props.title} />
      </div>

      <h1>{props.title}</h1>

      <p>{props.description}</p>
    </Container>
  )
}
