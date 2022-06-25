import styled from 'styled-components';

export const StyledFriendsList = styled.ul`

    display: flex;
    max-width: 400px;
    flex-direction: column;
    list-style: none;
    margin: 0 auto 150px;
    padding: 0;
    & .friend {
      display: flex;
      flex: 1 1 100%;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      padding: 15px;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
      border-radius: 6px;
    }

    .online-indicator {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: orange;
      &.online {
        background: green;
      }
    }
    .friend-thumb {
      max-width: 90px;
      object-fit: cover;
    }
    .friend-name {
      font-size: 22px;
      font-weight: 600;
      color: black;
    }
  }
`;
