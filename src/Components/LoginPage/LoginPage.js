import React from 'react'
import '../CommonStyles/login-signup.css'
import ClearIcon from '@mui/icons-material/Clear';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function LoginPage({onClose}) {
  return (
    <section className='loginpage-container'>
        <div className='loginpage-heading'>
            <h2>Log In</h2>
            <ClearIcon onClick={onClose}/>
        </div>

        <div className='loginform-input'>
            <div>
            <input type="email" placeholder='Email Id' />
            <MailOutlineIcon/>
            </div>

            <div>
            <input type="password" placeholder='Password' />
            <LockOpenIcon/>
            </div>

            <div>
                <button className='login-button'>LOG IN</button>
            </div>
        </div>

        <div className='login-footer'>
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
                <h3>Don't have an Account? <a href="/">SIGN UP</a></h3>
            </div>
        </div>
    </section>
  )
}

export default LoginPage