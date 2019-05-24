import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  background: rgb(4, 175, 124);
  color: #fff;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  button {
    border: none;
    border-radius: 2px;
    background: transparent;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;

    &:hover {
      cursor: pointer;
      color: #c1c1c1;
    }
  }
`;
