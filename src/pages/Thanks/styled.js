import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-content: center;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0 10px;
    padding: 5px 0;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 5px 10px;
    transition: all 400ms;
    &:hover {
      filter: brightness(75%);
    }
  }

  .icon {
    display: block;
    margin-bottom: 5px;
    justify-content: center;
    align-content: center;
  }
`;
