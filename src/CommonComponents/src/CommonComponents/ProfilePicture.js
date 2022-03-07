// React Module Imports
import React from 'react';

// Import Image Icons
import UploadPicture from '../Assets/icons/profile-picture-upload.svg';

import './ProfilePicture.css';

function ProfilePicture() {
    return (
        <>
            <div className='profile_picture_wrapper'>
                <img src={UploadPicture} alt="profile" />
            </div>
        </>
    );
}

export default ProfilePicture;
