import styled from "styled-components";

export const Container = styled.header`
  padding: 15px 85px;
  background-color: ${({ theme }) => theme.colors.background_white};
  box-shadow: 0 5.333px 80px 0 rgba(0,0,0,.1);

  main {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;

    ul {
      display: flex;
      gap: 35px;

      li {
        list-style: none;
        cursor: pointer;
        transition: .3s;
      }

      li:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`
