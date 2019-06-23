import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(4, 175, 124);
  color: #fff;
  height: 100%;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    span {
      color: #333;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    span.title {
      font-size: 24px;
    }
    span.error {
      margin-top: 5px;
      color: #ff6363;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 20px;
      color: #333;

      label {
        display: flex;
        flex-direction: column;
        input {
          height: 40px;
          padding: 0 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #444;

          &:focus {
            border-color: #79ceb5;
          }
        }
      }

      button {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
        border: 0;
        color: #fff;
        background: #04af7c;
        margin-top: 5px;

        &:hover {
          background: #04a373;
        }
      }

      .secundary {
        background: #b9b7b7;

        &:hover {
          background: #a7a4a4;
        }
      }
    }
  }
`;
