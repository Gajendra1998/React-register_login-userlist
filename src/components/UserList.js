import React from 'react'
import './style.css'
const UserList = () => {
    const list = JSON.parse(localStorage.getItem("userList"));
    console.log(list)
    return (
        <div className="base-container">

            <div className="content">

                <div className="Image">
                    < img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" />
                </div>
            </div>
            <div className="user-list">
        
                <h2>Here are the list of users email</h2>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        
                    </tr>
                    <tr>
                        <td>{list.username}</td>
                        <td>{list.email}</td>
                        
                    </tr>
                    
                </table>

            </div>

        </div>
    )
}

export default UserList
