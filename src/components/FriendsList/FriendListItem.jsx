import React from 'react';
import { PropTypes } from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="friend">
      <div className={`online-indicator ${isOnline ? 'online' : ''}`}></div>
      <img className="friend-thumb" src={avatar} alt={name} />
      <p className="friend-name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
