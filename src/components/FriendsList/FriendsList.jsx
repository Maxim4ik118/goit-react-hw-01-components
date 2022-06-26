import { PropTypes } from 'prop-types';

import FriendListItem from './FriendListItem';

import { StyledFriendsList } from './Styled';

function FriendsList({ friends = [] }) {
  return (
    <StyledFriendsList>
      {friends.length > 0 && friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </StyledFriendsList>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
