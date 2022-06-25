import styled from 'styled-components';

export const StyledStatistics = styled.div`
display: flex;
flex-direction: column;
background: #fff;
max-width: 400px;
margin: 0 auto 150px;
box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  .stats-title {
    text-align: center;
    padding: 30px 15px;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: gray;
    margin: 0
  }

  .stats {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    & > li {
      flex: 1 1 100%;
      text-align: center;
      border: 1px solid #d0d0d0;
      border-bottom: none;
      border-left: none;
      background: #eeeded;
      padding: 15px;
      &:last-child {
        border-right: none;
      }
    }
    .format,
    .value {
      display: block;
    }
    .format {
      font-weight: 600;
      margin-bottom: 8px;
      color: black;
    }
    .value {
      font-weight: 600;
      color: white;

    }
  }
`;
