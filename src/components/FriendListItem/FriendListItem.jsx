import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar , name = 'name', isOnline }) {
    return (
        <>
            <span className={isOnline ? s.statusOnline : s.statusOffline}>
                <svg height="20" width="20">
                    <circle cx="10" cy="10" r="10" fill="inherit" />
                </svg>
            </span>

            <img className={s.avatar} src={avatar} alt="avatar" width="48" />
            <p className={s.name}>{name}</p>
        </>
    );
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
