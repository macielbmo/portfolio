import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    color: ${({ theme }) => theme.colors.primary};
    transition: all .3s;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }

  .img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    color: ${({ theme }) => theme.colors.background};

    span {
      line-height: 0;
    }
  }

  a:hover {
    transform: scale(1.2);
  }
`
