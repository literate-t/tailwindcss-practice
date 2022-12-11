import React from 'react';
import rr from '../assets/rr.jpeg';
import classNames from "classnames";
import './style.css';

type PropsType = {
    type: String
}

const ProfilePhoto = ( {type} : PropsType ) => {
    let imageStyle = '';
    if (type === 'large') {
        imageStyle = classNames('w-[500px]', 'h-[500px]');
    } else if (type === 'medium') {
        imageStyle = classNames('w-[300px]', 'h-[300px]');
    }
    return (
        <div>
            <img src={rr} alt="royce" className={`test-style rounded-full ${imageStyle}`}/>
        </div>
    );
};

export default ProfilePhoto;