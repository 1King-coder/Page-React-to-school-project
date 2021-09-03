import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14pt;
    margin-bottom: 20px;
  }

  input {
    display: flex;

    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    margin-left: 50px;
    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const QuestionContainer = styled.div`
  border: ${(props) => (props.isLogged ? 'none' : '1px solid #ddd')};
  border-radius: 20px;
  margin-bottom: 20px;

  div {
    padding: 20px;
    font-size: 14pt;
  }

  label {
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
  }

  input {
    display: flex;
    width: 20px;
    height: 30px;
    padding: 0 10px;
    margin: 5px 25px 5px 20px;

    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }

  .radio-btn {
    border: 1px solid #ddd;
    border-radius: 20px;
  }

  select {
    font-size: 13pt;
    font-weight: 600;
    width: 45px;
    height: 35px;
    margin-left: 2em;
    margin-top: 0px;
  }

  .select-div {
    display: flex;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 0px;
    margin: 10px 0;
  }
`;
