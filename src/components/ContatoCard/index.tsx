import { ReactNode } from 'react'

import { Container } from "./style";

interface ContatoCardProps {
  icon: ReactNode,
  title: string,
  description: string,
  link: string
}

export default function ContatoCard(props: ContatoCardProps) {
  return(
    <Container>
      <a href={props.link} target='_blank'>
        <div className="img">
          <span>{props.icon}</span>
        </div>

        <h2>{props.title}</h2>

        <p>{props.description}</p>
      </a>
    </Container>
  )
}
