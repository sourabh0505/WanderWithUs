import React from 'react'
import '../CommonStyles/login-signup.css'
import ClearIcon from '@mui/icons-material/Clear';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';

function SignupPage({onClose}) {

  return (
    <section className='signuppage-container'>
        <div className='signuppage-heading'>
            <h2>Sign Up</h2>
            <ClearIcon onClick={onClose}/>
        </div>

        <div className='signupform-input'>
            <div>
            <input type="text" placeholder='Name' />
            <PersonIcon/>
            </div>
            
            <div>
            <input type="email" placeholder='Email Id' />
            <MailOutlineIcon/>
            </div>

            <div>
            <input type="password" placeholder='Password' />
            <LockOpenIcon/>
            </div>

            <div>
                <button className='signup-button'>SIGN UP</button>
            </div>
        </div>

        <div className='signup-footer'>
            <div>
                <div>
                <input type="checkbox" />
                <h3>Remember Me</h3>
                </div>

                <div>
                    <a href="/">Forgot Password?</a>
                </div>  
            </div>

            <div>
                <h3>Already have an Account? <a href="/">LOG IN</a></h3>
            </div>
        </div>
    </section>
  )
}

export default SignupPage