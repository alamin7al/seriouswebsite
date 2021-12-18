import React from 'react';

import logins from '../../img/preview.jpg';


import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
    useHistory
} from "react-router-dom";
import useAuth from './useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginuser, loading, error, googleLogin } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()

        loginuser(loginData.email, loginData.password, location, history)
    }
    const handelGoogleSignIn = () => {
        googleLogin(location, history)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Login</h2>



                    <form onSubmit={handleLoginSubmit}>


                        <div className="mb-3 text-start">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                name='email'
                                type="email" className="form-control" id="exampleInputEmail1"
                                onChange={handleOnChange}

                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Password</label>

                            <input
                                name='password'
                                type="password" className="form-control"

                                onChange={handleOnChange}

                                id="exampleInputPassword1" />
                        </div>

                        <button
                            className='btn btn-primary'
                            type='submit'
                        >Login</button>

                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/register'><p className='fs-4'


                            >New User?Please Register</p>
                        </NavLink>
                        {loading && <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>}
                        {user?.email && <div className="alert alert-primary" role="alert">
                            Login successfully!
                        </div>
                        }
                        {error && <div className="alert alert-warning" role="alert">
                            {error}
                        </div>
                        }
                    </form>
                    <p>----------------------------------</p>
                    <button
                        className='btn btn-primary'
                        onClick={ handelGoogleSignIn}
                    >Google SignIn</button>
                </div>

                <div className=' col-md-6'>
                    <img src={logins} style={{ width: '100%' }} alt='' />

                </div>

            </div>
        </div>
    );
};

export default Login;