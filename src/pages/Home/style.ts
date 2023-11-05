import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 70px;
`

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  .presentation-section {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 32px;
    align-items: center;
    justify-content: center;

    margin-top: 45px;
  }

  .data {
    width: 100%;
    max-width: 573px;
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

  .skills-section h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .box-skill {
    display: flex;
    gap: 32px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .about-section {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 32px;
    align-items: center;
    margin: 0 auto;
  }

  .data-about{
    width: 100%;
    max-width: 640px;
  }

  .img-about {
    display: flex;
    justify-content: center;

    img {
      width: 90%;
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

  .projects-section {
    >h1 {
    font-size: 28px;
    margin-bottom: 25px;
    }

    .box-projetos {
      display: flex;
      gap: 35px;
    }

  }
`
