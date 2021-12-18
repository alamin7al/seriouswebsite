import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RevewPepole.css'
// import { useForm } from "react-hook-form";

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
        <div className="add-service w-75 mx-auto">
            <h2 className='text-secondary mt-5'>Revew Box</h2>

            <form className='w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        


                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Your Name </label>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Description </label>
                    <input {...register("desc", { required: true, maxLength: 200 })} placeholder="desc" />
                </div>


                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Your Image </label>
                    <input {...register("img")} placeholder="image url" />

                </div>
                <div className='text-center'>
                <input className='btn btn-outline-success btn-lg text-center mb-5' type="submit" />

                </div>
            </form>
        </div>
    );
};


export default RevewPepole;