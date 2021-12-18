import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from './Login/useAuth';
import { useForm } from "react-hook-form";
import Information from './Information';
const YourProfile = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/update', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                
            })
        console.log(data);

    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-5 mt-5">


                    <div className="text-center mt-5">
                        <Card.Img className='w-50 h-50 mt-1 rounded-5' variant="top" src={user?.photoURL} />
                    </div>
                    <Card.Body>
                        <Card.Title>{user.displayName}</Card.Title>
                        <Card.Text>
                            {user?.email}
                        </Card.Text> 
                    </Card.Body>

                    <div>
                        <Information

                        ></Information>
                    </div>
                </div>
                <div className="col-md-7">
                    <form className="shipping-form w-100 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex justify-content-center align-items-center text-capitalize fw-lighter text-start fw-normal'>
                            <div className='me-5 h-100 w-100'>
                                {user?.displayName && <div className="mb-3 text-start ">
                                    <label for="exampleInputEmail1" className="form-label fs-5">Your Name</label>
                                    <input defaultValue={user.displayName} placeholder='Car Name'  {...register("name")}

                                        className="form-control w-100 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>}
                                {user?.email && <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">Your Email </label>
                                    <input defaultValue={user.email} placeholder='Modal Number' {...register("email", { required: true })} className="form-control fs-5" id="exampleInputPassword1" />
                                </div>}

                                {errors.email && <span className="error">This field is required</span>}

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Address </label>
                                    <input placeholder="address"  {...register("address")} className="form-control fs-5" id="exampleInputPassword1" />

                                </div>

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Counter</label>
                                    <input placeholder='Countery Name'  {...register("countery")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> ZipCode</label>
                                    <input placeholder='Zip Code'  {...register("zip")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Phone Number</label>
                                    <input placeholder='Phone Number'  {...register("number")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Relegon</label>
                                    <input placeholder='Relegon'  {...register("Relegon")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                            </div>





                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-lg mt-5">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;