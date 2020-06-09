import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ LoggedIn, component: Comp, ...rest }) => {
 ///PrivateRoute for Auth With User Account if Signned In then true to get in...
 //There is Two Way to Redirecting User..   
 //One..
    return (
        <Route {...rest} component={(props) => (
            LoggedIn ? <Comp {...props} user={LoggedIn} /> : <Redirect to='/login' />
        )} />
    )

 //Another..
 //Also Can Use this One...
    // return <>
    //     {LoggedIn ?
    //         <Comp {...rest} />
    //         :
    //         <Redirect to='/login' />
    //     }
    // </>
}

export default PrivateRoute;