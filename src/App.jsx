import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Route from './Route';
import Button from './widgets/widgets';

//Firebase imports for logout user...
import {firebase} from './firebase';

const App = (props) => {
    //Hooks for Login/Logout Button Show/Not...
    const [status, setStatus] = useState(true);

  //LifeCycle Function...  
    useEffect(() => {
        firebase.auth()
        .onAuthStateChanged(user => setStatus(user ? false : true))
    })

 ///Make user signned-out with triggers this event...
    const logoutUser = () => {
        firebase.auth().signOut();
    }

    //Returning Statement..   
    return (//returning statment..
        <Router>
            <div className='home'>
                <div className='homeText'>
                    <h2>React & Firebase Authentication Form</h2>
                </div>

                <Link to='/dashboard'>
                    <Button type='dashboard' value='dashboard' />
                </Link>

                <Link to='/signup'>
                    <Button type='signup' value='signup' />
                </Link>

                {status ?
                    <Link to='/login'>
                        <Button type='login' value='login' />
                    </Link>
                    :
                    <Button type='logout' value='logout' click={ logoutUser } />
                }
                <Route {...props} />
            </div>
        </Router>
    );
}

export default App;