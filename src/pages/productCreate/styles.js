import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto 0;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .back {
      color: #04966a;
      font-size: 20px;
      margin-right: 20px;

      &:hover {
        opacity: 0.5;
      }
    }
    h1 {
      font-size: 32px;
      color: #333;
    }
  }

  span.date {
    color: #04966a;
    line-height: 24px;
    font-size: 16px;
    margin-top: 5px;
  }
  p {
    color: #666;
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  p a {
    color: #069;
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

      textarea {
        padding: 10px 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #444;
        resize: none;
        font-family: Verdana, Arial, Helvetica, sans-serif;

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
  }
`;
