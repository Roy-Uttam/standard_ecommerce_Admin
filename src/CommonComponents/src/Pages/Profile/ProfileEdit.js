// React Module Imports
import React from 'react';

// Common Components Imports
import ProfilePicture from '../../CommonComponents/ProfilePicture';
import BlackButton from '../../CommonComponents/Buttons/BlackButton';
import './ProfileEdit.css';

function ProfileEdit() {
    return (
        <>
            <section className='profile_edit page_padding'>
                <div className='container'>
                    <div className='profile_edit_content'>
                        <div className='profile_edit_upload_picture'>
                            <ProfilePicture />
                            <button className='upload_picture'>UPLOAD YOUR PICTURE</button>
                        </div>
                        <div className='form_wrapper'>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Name</label>
                                <input className='input_field' type="text" placeholder='Your Name' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Email</label>
                                <input className='input_field' type="email" placeholder='Your Email Address' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Phone</label>
                                <input className='input_field' type="text" placeholder='Your Phone No.' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Date of Birth</label>
                                <input className='input_field' type="date" placeholder='' />
                            </div>
                            <BlackButton>SAVE CHANGES</BlackButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileEdit;
