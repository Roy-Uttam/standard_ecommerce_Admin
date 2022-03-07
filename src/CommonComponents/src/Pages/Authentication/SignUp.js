// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import BlackButton from '../../CommonComponents/Buttons/BlackButton';

function SignUp() {
    return (
        <>
            <section className='deliver_address_edit page_padding'>
                <div className='container'>
                    <div className='deliver_address_edit_content'>
                        <h4>Create New Account</h4>
                        <div className='form_wrapper'>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Name</label>
                                <input className='input_field' type="text" placeholder='Your Name' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Phone</label>
                                <input className='input_field' type="text" placeholder='Phone Number' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Email</label>
                                <input className='input_field' type="email" placeholder='Phone Email' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Password</label>
                                <input className='input_field' type="password" placeholder='Your Password' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Confirm Password</label>
                                <input className='input_field' type="text" placeholder='Confirm Password' />
                            </div>
                            <BlackButton>submit</BlackButton>
                        </div>
                        <div className='create_forgot'>
                            <p>
                                Already Have Account?
                                <Link to='/sign-in' className='create_new'> LogIn here!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
