import { PropTypes } from 'prop-types';
import { StyledFriendsList } from './Styled';

function FriendsList({ friends }) {
  return (
      <StyledFriendsList >
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className="friend" key={id}>
              <div
                className={`online-indicator ${isOnline ? 'online' : ''}`}
              ></div>
              <img className="friend-thumb" src={avatar} alt={name} />
              <p className="friend-name">{name}</p>
            </li>
          );
        })}
      </StyledFriendsList>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendsList;
