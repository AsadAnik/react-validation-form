import React from 'react';
import Close from '../../widgets/widgets';
import Styles from './dashboard.module.css';

const Dashboard = ({ user }) => {
    // console.log(user)
 ///Manage the User from Authentication...   
    return (
        <div className={Styles.dashboard}>
            <Close type='close' />

            <div className={Styles.userCard}>
                <div className={Styles.cardHeader}>
                    <img src={user.photoURL} alt="image not founded!" />

                    <div className={Styles.headerText}>
                        <h1>{user.displayName}</h1>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>email: </span>
                            <span style={{ textTransform: 'lowercase' }}>{user.email}</span>
                        </p>
                    </div>
                </div>

                <div className={Styles.cardFooter}>
                    <p>
                        <span style={{ fontWeight: 'bold' }}>{user.metadata.lastSignInTime}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;