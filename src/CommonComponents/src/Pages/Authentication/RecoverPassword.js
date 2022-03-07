// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import BlackButton from '../../CommonComponents/Buttons/BlackButton';

export default function RecoverPassword() {
    return <>
        <section className='deliver_address_edit page_padding'>
            <div className='container'>
                <div className='deliver_address_edit_content'>
                    <h4>Recover Your Password</h4>
                    <div className='form_wrapper'>
                        <div className='input_group'>
                            <label htmlFor="" className='input_field_label'>New Password</label>
                            <input className='input_field' type="email" placeholder='Type your password' />
                        </div>
                        <div className='input_group'>
                            <label htmlFor="" className='input_field_label'>Confirm Password</label>
                            <input className='input_field' type="email" placeholder='Re-type your password' />
                        </div>
                        <BlackButton>submit</BlackButton>
                    </div>
                    <div className='create_forgot'>
                        <p>
                            Remenber Your Password?
                            <Link to='/sign-in' className='create_new'> LogIn here!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
