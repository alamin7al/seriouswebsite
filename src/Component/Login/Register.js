import React from 'react';
import logins from '../../img/preview.jpg';
import { useState, } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    useHistory,
    Link,
    useParams,
    useLocation,
    useRouteMatch
} from "react-router-dom";
import useAuth from './useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {user, signInUser, loading,error } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('not Matched')
            return
        }
        signInUser(loginData.email, loginData.password,loginData.name, location, history)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Register</h2>
                    <form onSubmit={handleLoginSubmit}>

                         <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label ">Your Name</label>

                            <input
                                name='name'

                                className="form-control"
                                onBlur={handleOnBlur}
                            

                                id="exampleInputPassword1" />
                        </div> 


                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Email</label>

                            <input
                                name='email'
                                type='email'
                                className="form-control"
                                onBlur={handleOnBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Password</label>

                            <input
                                name='password'
                                type="password" className="form-control"
                                onBlur={handleOnBlur}


                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">ReType Your Password</label>

                            <input
                                name='password2'
                                type="password" className="form-control"
                                onBlur={handleOnBlur}


                                id="exampleInputPassword1" />
                        </div>

                        <button
                            className='btn btn-primary btn-lg'
                            type='submit'
                        >Login</button>
                        <br />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/login'><p
                                className=' fs-4'

                            >Already Register? Please Login</p>
                        </NavLink>
                        {loading && <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>}
                    </form>


                    {user?.email && <div className="alert alert-primary" role="alert">
                        Login successfully!
                    </div>
                    }
                 {error && <div className="alert alert-warning" role="alert">
                        {error}
                    </div>
                    } 






                </div>
                <div className=' col-md-6'>
                    <img src={logins} style={{ width: '100%' }} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Register;