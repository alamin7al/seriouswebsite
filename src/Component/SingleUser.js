import React, { useEffect, useState } from 'react';
import useAuth from './Login/useAuth';
import User from './User';

const SingleUser = () => {
    const { user, loading } = useAuth()
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])




    // console.log(users);
    return (
        <div className='container'>
            {!loading && <div className="row">

                {
                    users.map(user => <User
                        key={user._id}
                        users={users}
                        user={user}
                        setUsers={setUsers}
                    ></User>)
                }
            </div>}
            {loading && <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>}
        </div>

    );
};

export default SingleUser;