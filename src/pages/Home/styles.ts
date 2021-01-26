import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.div`
  background: #000;
  height: 82px;
  width: 100%;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  transition: 1s;

  .logo {
    width: 152px;
    margin-left: 53px;
    transition: 1s;
  }

  @media (max-width: 640px) {
    height: 56px;

    .logo {
      width: 100px;
      margin-left: 16px;
    }
  }
`;

export const Search = styled.div`
  background: #4f9419;
  display: flex;
  align-items: center;
  padding: 48px 16px 68px;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    width: 1296px;
    margin: 0 auto;
    label {
      color: #fff;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 16px;

      span {
        margin: 0 0 3px 2px;
      }

      &:nth-child(1) {
        width: 303px;
      }
      &:nth-child(2) {
        width: 455px;
      }
      &:nth-child(3) {
        width: 238px;
      }
    }
    input,
    select {
      padding: 15px;
      border: none;
      background: #fff;
      border-radius: 7px;
      width: 100%;
      line-height: 19px;
      height: 48px;
    }
    button {
      width: 203px;
      height: 48px;
      border: none;
      border-radius: 7px;
      background: #006c18;
      color: #fff;
      font-size: 18px;
      line-height: 21px;
      padding: 16px 64px;
    }
  }

  @media (max-width: 1296px) {
    padding: 6px 16px 24px;

    form {
      width: 780px;

      button {
        margin: 16px 0 0 0;
      }
    }
  }

  @media (max-width: 810px) {
    form {
      width: 100%;

      label {
        width: 100% !important;
      }

      button {
        width: 100%;
      }
    }
  }
`;

export const Cards = styled.div`
  padding: 32px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
