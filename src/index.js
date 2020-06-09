import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

///Using Database(firebase)...
import { firebase } from './firebase';

///Checking the user with App starts... 
firebase.auth().onAuthStateChanged(user => {
  user ? console.log('Loggged-In') : console.log('Logged-Out!')

 //Rendering the Application with Authentication... 
  ReactDOM.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>,
    document.getElementById('root')
  )
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

