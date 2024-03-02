import styled from 'styled-components';
import { theme } from '../../themes';

export const ConfirmPaymentContainer = styled.div`
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
`;

export const InfoBox = styled.div`
  text-align: center;
  padding-bottom: 50px;
  h1 {
    /* color: ${theme.color.textColor2}; */
    text-transform: capitalize;
  }
  small {
    color: #777;
    font-size: 20px;
  }

  @media screen and (max-width: 520px) {
    h1 {
      font-size: 25px;
    }
    small {
      font-size: 16px;
    }
  }
`;
export const Form = styled.form`
  text-align: center;
  label {
    display: inline-block;
    font-size: 16px;
    text-align: center;
    color: #888;
    text-transform: capitalize;
  }
  input {
    display: block;
    height: 50px;
    width: 250px;
    background: transparent;
    border: 1px solid #888;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 20px;
    color: #000;
  }

  button {
    margin-top: 20px;
    padding: 20px;
    background: #666;
    border-radius: 10px;
    font-size: 16px;
    text-transform: capitalize;
    transition: 0.5s all;

    :hover {
      font-weight: bold;
      /* box-shadow: ${theme.shadow.mainShadow}; */
    }
  }
`;
