import React from 'react'

import Card from '../../UI/Card/Card'
import styles from './UsersList.module.css'

const UsersList = props => {
    return (
        <Card className={styles.users}>
            <ul className={styles.ul}>
                {props.users.map(user => (
                    <li key={user.id} className={styles.li}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList