import styled from "styled-components";

export const Container = styled.header`
  padding: 15px 85px;
  background-color: ${({ theme }) => theme.colors.background_white};
  box-shadow: 0 5.333px 80px 0 rgba(0,0,0,.1);

  width: 100%;
  position: fixed;
  z-index: 1;

  .list {
    display: flex;
    justify-content: space-between;

    ul {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;

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

  @media (max-width: 890px) {
    padding: 15px 20px;

    .list ul {
      width: 100%;
    }

    .button {
      display: none;
    }

    .list {
      justify-content: center;
    }
  }

  @media (max-width: 460px) {
    li {
      font-size: 12px;
    }
  }
`
