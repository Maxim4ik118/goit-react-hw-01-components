import styled from 'styled-components';

export const StyledProfile = styled.div`
display: flex;
flex-direction: column;
background: #fff;
border: 1px solid #d0d0d0;
border-radius: 4px;
max-width: 400px;
margin: 0 auto 150px;
box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  .description {
    text-align: center;
    padding: 40px 15px;
    .avatar {
      max-width: 100px;
      width: 100%;
      border-radius: 50%;

    }
    .name,
    .tag,
    .location {
      font-family: sans-serif;
    }
    .name {
      font-weight: 600;
    }
    .tag {
      color: gray;
    }
    .location {
      font-weight: 600;
      color: brown;

    }
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
    .label,
    .quantity {
      display: block;
    }
    .label {
      margin-bottom: 8px;
    }
    .quantity {
      font-weight: 600;
      color: brown;
    }
  }
`;
