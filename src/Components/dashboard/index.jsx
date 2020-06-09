import React, { useState, useEffect } from 'react';
import Close from '../../widgets/widgets';
import Styles from './dashboard.module.css';

//From Firebase...
import { firebaseDB } from '../../firebase';

const Dashboard = ({ user }) => {
    //Hooks for grabes all data here into firebase...   
    const [newUserData, setNewUserData] = useState({ data: [] })

    //The lifecycle function to get data from firebase...   
    useEffect(() => {
        firebaseDB.ref('users').on('value', (snapshots) => {
            let newUsers = [];

            snapshots.forEach(values => {
                newUsers.push({
                    id: values.key,
                    ...values.val()
                })
            })
            ///console.log('-----New USers Data----', newUsers)
            setNewUserData({ data: newUsers })
        })
    }, [])

    // console.log('state data------', newUserData)

    ///Manage the User from Authentication...   
    return (///Just Created One Profile For Accual User...
        <div>
            <div className={Styles.dashboard}>
                <Close type='close' />

                <div className={Styles.userCard}>
                    {/*----------Login Card Header---------*/}
                    <div className={Styles.cardHeader}>
                        <img src={user.photoURL} alt="profile cover can't resolved!" />

                        <div className={Styles.headerText}>
                            <h1>{user.displayName}</h1>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>email: </span>
                                <span style={{ textTransform: 'lowercase' }}>{user.email}</span>
                            </p>
                        </div>
                    </div>
                    <hr />

                    {/*------------The Data from Firebase Submitted Form---------*/}
                    <div className={Styles.dashboardForm}>
                        <h2 className={Styles.postHeadText}>
                            {newUserData.data.length ? 'upcomming posts' : 'no post submitted!'}
                        </h2>

                        {newUserData.data.map(item => (
                            <div key={item.id} className={Styles.post}>
                                <div className={Styles.postHeader}>
                                    <h2>
                                        <span>{item.fname}</span>
                                        <span> </span>
                                        <span>{item.lname}</span>
                                    </h2>
                                    <p>
                                        <span className={Styles.headerBody}>email</span>
                                        <span>: </span>
                                        <span className={Styles.headerTitle}>{item.email}</span>
                                    </p>
                                    <p>
                                        <span className={Styles.headerBody}>mobile</span>
                                        <span>: </span>
                                        <span className={Styles.headerTitle}>{item.phone}</span>
                                    </p>
                                    <p>
                                        <span className={Styles.headerBody}>age</span>
                                        <span>: </span>
                                        <span className={Styles.headerTitle}>{item.age}</span>
                                    </p>
                                    <p>
                                        <span className={Styles.headerBody}>gender</span>
                                        <span>: </span>
                                        <span className={Styles.headerTitle}>{item.gender}</span>
                                    </p>
                                </div>

                                <div className={Styles.postBody}>
                                    <h3>{item.title}</h3>
                                    <p style={{ textTransform: 'none' }}>
                                        {item.post}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*---------Login Cards Footer--------*/}
                    <div className={Styles.cardFooter}>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>{user.metadata.lastSignInTime}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;