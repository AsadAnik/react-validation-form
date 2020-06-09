import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './widgets.module.css';

///Dynamically Provides the Buttons for Components...
const Widgets = ({ type, click, value }) => {
    ///Get Widgets from this function..   
    const getWidgets = (btnType) => {
        let getBtn = null;

        switch (btnType) {
            case "close":
                getBtn = (
                    <Link to='/'>
                        <div className={Styles.close}>
                            <span className={Styles.x}>x</span>
                        </div>
                    </Link>
                )
                break;
            
            case "submit":
                getBtn = (
                    <button type={type}>{value}</button>
                )
            break;

            case "login":
                getBtn = (
                    <button className={Styles.loginBtn}>{value}</button>
                )
                break;

            case "logout":
                getBtn = (
                    <button
                        className={Styles.logoutBtn}
                        onClick={click}
                    >{value}</button>
                )
                break;

            case "signup":
                getBtn = (
                    <button
                        className={Styles.signupBtn}
                        onClick={click}
                    >{value}</button>
                )
                break;

            case "google":
                getBtn = (
                    <button className={Styles.google} onClick={click}>
                        {value}
                    </button>
                )
                break;

            case "dashboard":
                getBtn = (
                <button className={Styles.dashboard}>{value}</button>
                )
            break;
            
            case "facebook":
                getBtn = (
                    <button className={Styles.facebook} onClick={click}>
                        {value}
                    </button>
                )
            break;

            default:
                getBtn = null;
        }

        return getBtn;
    }

    return (
        <>
            {getWidgets(type)}
        </>
    )
}

export default Widgets;