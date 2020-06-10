import React from 'react';
import Styles from './dashboard.module.css';

const Post = ({newUserData}) => {
///The Upcomming
    return (
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
    )
}

export default Post;