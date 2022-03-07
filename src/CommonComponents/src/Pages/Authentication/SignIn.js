// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import Logo from '../../CommonComponents/Logo/Logo';
import BlackButton from '../../CommonComponents/Buttons/BlackButton';

import './SignIn.css';

function SignIn() {
    return (
        <>
            <section className='sign_in_page page_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='column_left'>
                            <div className='sign_in_content'>
                                <Logo />
                                <h1>Sign in to Your Account</h1>
                                <p>Welcome to F-Ecommerce</p>
                            </div>
                        </div>
                        <div className='column_right'>
                            <div className='sign_in_form_content'>
                                <h4>Sign in to continue</h4>
                                <div className='form_wrapper'>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Email</label>
                                        <input className='input_field' type="text" placeholder='Enter your email' />
                                    </div>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Password</label>
                                        <input className='input_field' type="text" placeholder='Enter your password' />
                                    </div>
                                    <BlackButton>Sign In</BlackButton>
                                </div>
                                <div className='create_forgot'>
                                    <Link to='/forget-password' className='forgot_pass'>Forgot Password?</Link>
                                    <p>
                                        Don’t have any account? 
                                        <Link to='/sign-up' className='create_new'> Create One!</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
