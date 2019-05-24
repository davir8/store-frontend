import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  max-width: 700px;
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

  .info-owner {
    display: flex;
    flex-direction: column;
    color: #444;
    padding: 10px;
    border: 1px solid #cecece;
    border-radius: 3px;
  }
`;
