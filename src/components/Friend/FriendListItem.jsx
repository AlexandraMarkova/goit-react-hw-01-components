import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
};

export default FriendListItem;
