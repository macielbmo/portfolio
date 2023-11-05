import styled from "styled-components";

export const Container = styled.div`
    button {
      padding: 15px 32px;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.colors.background_white};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};

      font-size: 16px;
      transition: all .3s;
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.background_white};
    }
`
