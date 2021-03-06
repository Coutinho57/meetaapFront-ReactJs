import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      display: flex;
      align-self: flex-end;
      padding: 7px 12px;
      background: #fa4d69;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: 5px;
      transition: background 0.2s;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 5px;
      }
      &:hover {
        background: ${darken(0.06, '#fa4d69')};
      }
    }
  }
`;
