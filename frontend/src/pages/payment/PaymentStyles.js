import styled from 'styled-components';
import { theme } from '../../themes';

export const PaymentContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 150px auto;
  /* border: 1px solid ${theme.color.textColor2}; */
  border-radius: 10px;
  /* box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75); */
  /* box-shadow: ${theme.shadow.mainShadow}; */
  h1,
  h2 {
    /* color: ${theme.color.textColor2}; */
  }

  @media screen and (max-width: 520px) {
    h1 {
      text-align: center;
      line-height: 35px;
      margin-bottom: 30px;
    }
  }
`;

export const PaymentInput = styled.div`
  margin: 10px 0;
  label {
    display: inline-block;
    color: #777;
  }
  input {
    width: 100%;
    /* border: 1px solid ${theme.color.textColor}; */
    padding: 10px;
    background: inherit;
    color: #000;
    border-radius: 5px;
    margin-bottom: 10px;
    background: transparent;
    /* border: 1px solid ${theme.color.textColor}; */
    border-radius: 10px;
    /* padding: 0 10px; */
    font-size: 20px;
  }
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* button {

    border-radius: 10px;
    font-size: 16px;
    text-transform: capitalize;
    transition: 0.5s all;

    :hover {
      font-weight: bold;
    }
  } */
`;
