import React from 'react'
import { Link } from "react-router-dom";
import '../css/styles.css'
import '../components/MainHeader';
import MainHeader from '../components/MainHeader';
export default function LoginPage() {
    let login = document.getElementById('login').value
    let password = document.getElementById('Password').value
    function logIn() {
        if (login == 'admin' && password == 'admin') {
            browserHistory.push('/NoteBook')
        }

    }
    logIn();
    return (
        <div className='loginPage'>
            <MainHeader />
            <div className='loginBlock'>
                <form action="">
                    <div>
                        <span>Login: </span>
                        <input type="text" name="Login" id="Login" />
                    </div>
                    <div>
                        <span>Password: </span>
                        <input type="text" name="Password" id="Password" />
                    </div>
                    <div className='buttonBlock'>

                        <Link to='#'>Forgot password?</Link>
                        <button>Submit</button>


                    </div>


                </form>
            </div>
        </div>
    )
}