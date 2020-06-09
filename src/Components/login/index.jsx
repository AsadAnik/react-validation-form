import React from 'react';
import Button from '../../widgets/widgets';
import Styles from './login.module.css';

///from Firebase...
import { firebase, googleAuth, facebookAuth } from '../../firebase';

const Login = () => {

    ///Function for Google Auth Login...  
    const googleClick = () => {
        firebase.auth().signInWithPopup(googleAuth)
    }

    ///Function for Facebook Auth Login...
    const facebookClick = () => {
        firebase.auth().signInWithPopup(facebookAuth)
    }

    return (
        <div className={Styles.login}>
            <Button type='close' className={Styles.close} />

            <Button type='google' value='login with google' click={ googleClick } />
            <Button type='facebook' value='facebook login' click={ facebookClick } />
        </div>
    )
}

export default Login;