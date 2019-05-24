import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto 0;
  padding: 0 20px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  article p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  article a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid rgb(4, 175, 124);
    background: none;
    margin-top: 10px;
    color: rgb(4, 175, 124);
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }

  article a:hover {
    background: rgb(4, 175, 124);
    color: #fff;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .actions button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: rgb(4, 175, 124);
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }

  .actions button:hover {
    opacity: 0.7;
  }

  .actions button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;
