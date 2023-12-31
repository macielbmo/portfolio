import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  .box-img-project {
    position: relative;
    width: 100%;
    padding-top: 58.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0px 10px 10px 0 rgba(0,0,0,.2);
    }
  }

  .box-content-project {
      height: auto;

      background-color: ${({ theme }) => theme.colors.background_white};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      padding: 50px 25px 15px;
      margin-top: -20px;

      border-radius: 15px;
      color: ${({ theme }) => theme.colors.primary};

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;

      .header {
        display: flex;
        flex-direction: column;
        gap: 3px;

        h1 {
          font-size: 22px;
        }

        p {
          font-size: 16px;
          font-weight: 300;
        }
      }

      .links {
        display: flex;
        justify-content: flex-end;
        gap: 15px;

        font-size: 14px;
        font-weight: 700;

        a {
          cursor: pointer;
          color: ${({ theme }) => theme.colors.primary};
        }

        a:hover {
          color: #000;
        }
      }
    }
`
