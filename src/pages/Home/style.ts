import styled from 'styled-components';

export const Container = styled.div`

  .container-main {
    width: 100%;
    margin: 0 auto;
    padding: 85px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background_white};
    box-shadow: 0 5.333px 80px 0 rgba(0,0,0,.1);
  }

  @media (max-width: 768px) {
    .container-main {
      padding: 85px 10px 35px;
    }
  }
`

export const PresentationSection = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
  gap: 32px;

  align-items: center;
  margin-top: 45px;

  .data {
    width: 100%;
    max-width: 573px;
    margin: 0 auto;
  }

  .information {
    color: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      font-size: 21px;
    }

    h1 {
      font-size: 64px;
      line-height: 1.1;
    }
  }

  .data img{
    width: 100%;
    height: auto;
  }

  @media (max-width: 1080px) {
    .information {
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  @media (max-width: 375px) {
    .information {
      h3 {
        font-size: 14px;
      }

      h1 {
        font-size: 32px;
        line-height: 1.1;
      }
    }
  }
`

export const SkillsSection = styled.section`
  width: 100%;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .box-skill {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    >h1 {
      text-align: center;
    }
  }
`

export const AboutSection = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(386px, 1fr));
  gap: 120px;

  .content-about{
    width: 100%;
    max-width: 640px;
  }

  .img-about {
    display: flex;
    justify-content: flex-end;

    img {
      width: 65%;
      height: auto;
    }
  }

  .content-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1080px) {
    gap: 45px;

    .data-about{
      justify-content: center;
      margin: 0 auto;
    }

    .content-about {
      max-width: 100%;
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`

export const ProjectSection = styled.section`
  width: 100%;

  >h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .box-projetos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 375px) {
    .box-projetos {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  }
`

export const ContactSection = styled.section`
  width: 100%;
  margin-top: 24px;

  .box-contacts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 0 auto;
  }
`
