import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  background-color: #F5FCFF;
  padding: 32px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;


  .box-img {
    width: 74px;
    height: 74px;
    padding: 13px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background_white};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25)
  }

  .box-img img {
    width: 100%;
  }

  h1 {
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }
`
