import React from 'react';
import { useForm } from "react-hook-form";

const AddCar = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/carslist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added SuccessFully.');

                }
            })

    }






    return (
        <div className='container my-5'>
            <div className="row border border-5 rounded-3 rounded-bottom border  opacity-100 ">
                <h3>Please Add A New  Car And Chaeck All Car Page  </h3>
                <div className="col-md-12 mt-5">
                    <form className="my-4 shipping-form w-100 mx-auto shadow-lg p-2 mb-5 bg-body rounded" onSubmit={handleSubmit(onSubmit)}>

                        <div className='d-flex justify-content-center align-items-center text-capitalize fw-lighter text-start fw-bolder p-3'>

                            <div className='me-5 h-100 w-100 text-uppercase fst-italic'>
                                <div className="mb-3 text-start ">
                                    <label for="exampleInputEmail1" className="form-label fs-5">Car Name</label>
                                    <input placeholder='Car Name'  {...register("name")} className="form-control w-100 fs-5 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">Modal Number </label>
                                    <input placeholder='Modal Number' {...register("email", { required: true })} className="form-control fs-5 text-center" id="exampleInputPassword1" />
                                </div>

                                {errors.email && <span className="error">This field is required</span>}

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Transmission </label>
                                    <input placeholder="Transmission"  {...register("productName")} className="form-control fs-5 text-center" id="exampleInputPassword1" />

                                </div>

                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">Img Src</label>
                                    <input placeholder='Img Src'  {...register("img")} className="form-control fs-5 text-center" id="exampleInputPassword1"

                                    />

                                </div>
                            </div>



                            <div className='me-5 h-100 w-100 text-uppercase fst-italic'>
                                <div className="mb-3 text-start ">

                                    <label for="exampleInputPassword1" className="form-label fs-5">Exterior color</label>
                                    <input  placeholder="Exterior color"  {...register("color")} className="form-control fs-5 text-center" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3 text-start">

                                    <label for="exampleInputPassword1" className="form-label fs-5">Price </label>
                                    <input placeholder="Fuel type"  {...register("Price")} className="form-control fs-5 text-center" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">Details</label>
                                    <input placeholder="Details" {...register("Details")} className="form-control fs-5 text-center" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">Engine</label>
                                    <input placeholder="Engine" {...register("Engine")} className="form-control fs-5 text-center" id="exampleInputPassword1" />
                                </div>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-lg my-2 w-25">Add Car</button>

                    </form>
                </div>

            </div>
        </div>

    );
};

export default AddCar;