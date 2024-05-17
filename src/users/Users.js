import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Usercontext } from './Usercontext';

import Adduser from "./Adduser";
import Userlist from "./Userlist";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setUsers(response.data);
        }).catch(error => {

        });
    };
    const userActions = (actionName, data) => {
        if (actionName === 'add') {
            setUsers([...users, {id: users.length + 1, ...data}]);
        } else {
            setUsers(users.filter(user => user.id !== data));
        }
    }
    return (
        <div className="container">
            <div className="row">
                <Usercontext.Provider value={{users: users, userActions}}>
                    <Userlist></Userlist>
                    <Adduser></Adduser>
                </Usercontext.Provider>
            </div>
        </div>
    )
}

export default Users;
