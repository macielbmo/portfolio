import { ReactNode } from 'react'
import { Container } from "./style";

interface SkillCardProps {
  icon: ReactNode,
  color: string,
  title: string,
  description: string
}

export default function SkillCard(props: SkillCardProps) {
  return(
    <Container>
      <div className="box-img">
        <span style={{color: props.color}}>{props.icon}</span>
      </div>

      <h1>{props.title}</h1>

      <p>{props.description}</p>
    </Container>
  )
}
