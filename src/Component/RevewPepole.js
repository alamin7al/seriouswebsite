import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RevewPepole.css'
// import { useForm } from "react-hook-form";
import feedback from '../img/istockphoto-1300371768-170667a.jpg'
const RevewPepole = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/revew', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h2 className='text-secondary mt-5'>Website Revew Page Please FeedBack!</h2>

                <div className="col-md-6">
                    <div className="add-service mx-auto">

                        <form className='w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>



                            <div className="mb-3 text-start w-100">
                                <label for="exampleInputEmail1" className="form-label  w-100">Your Name </label>
                                <input className='w-100 h-100 fs-5 text-capitalize' {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                            </div>

                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label h-100  w-100">Description </label>
                                <input className='w-100 h-100 text-capitalize fs-5' {...register("desc", { required: true, maxLength: 200 })} placeholder="desc" />
                            </div>


                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label  w-100">Your Image </label>
                                <input className='w-100 h-100 text-capitalize fs-5' {...register("img")} placeholder="image url" />

                            </div>
                            <div className='text-center'>
                                <input className='btn btn-dark btn-lg text-center mb-5' type="submit" />

                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={feedback} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};


export default RevewPepole;