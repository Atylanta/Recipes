import React from 'react';
import '../index.css'

const Nickname = (props) => {
    return (
        <div className="user-wrapper">
            <div className="user">{props.profile.initials}</div>
        </div>
    )
};

export default Nickname;