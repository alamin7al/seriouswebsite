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
        <div className='container my-5'>
            <div className="row border border-1 rounded-3 rounded-bottom border  opacity-100 ">
                <h3 className='fs-1   text-capitalize text-muted '>Personal Information Form   </h3>
                <p className='fs-5 text-start'>
                    This personal information form can be used by any business looking to collect basic personal information about their employees, customers, or partners. You can easily  publish it on your website or send it via email to whoever needs to fill it in. Done!</p>
                <div className="col-md-12 ">
                    <form className="my-4 shipping-form w-100 mx-auto shadow-sm p-2 mb-5 bg-body rounded" onSubmit={handleSubmit(onSubmit)}>

                        <div className='d-flex justify-content-center align-items-center text-capitalize fw-lighter text-start fw-bolder p-3'>

                            <div className='me-5 h-100 w-100 text-uppercase fst-italic'>
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
                                    <label for="exampleInputPassword1" className="form-label fs-5">Street Address </label>
                                    <input placeholder="address"  {...register("address")} className="form-control fs-5" id="exampleInputPassword1" />

                                </div>


                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Countery</label>
                                    <input placeholder='Countery Name'  {...register("countery")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Gender</label>
                                    <input placeholder='Gender Name Male or Female'  {...register("gender")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                            </div>



                            <div className='me-5 h-100 w-100 text-uppercase fst-italic'>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5">City Name </label>
                                    <input placeholder="City"  {...register("city")} className="form-control fs-5" id="exampleInputPassword1" />

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
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Date Of Birth</label>
                                    <input placeholder='Date Of Birth'  {...register("date")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label fs-5"> Home Telephone Number</label>
                                    <input placeholder='Home Number'  {...register("telephone")} className="form-control fs-5" id="exampleInputPassword1"

                                    />

                                </div>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-lg ">Submit Your Information</button>

                    </form>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                <div>
                        <Information
                        ></Information>
                    </div>
                    <div className="text-center mt-5">
                        <Card.Img className='w-25 h-25 mt-1 rounded-5 rounded-circle' variant="top" src={user?.photoURL} />
                    </div>
                    <Card.Body>
                        <Card.Title className='fw-normal fs-4 text-muted'>{user.displayName}</Card.Title>
                        <Card.Title className='fw-normal fs-4 text-muted'>  {user?.email}</Card.Title>
                      

                    </Card.Body>
                    
                </div>
                </div>

            
        </div>
        // <div className='container'>
        //     <div className="row">
        //         {/* <div className="col-md-5 mt-5">
        //             <div className="text-center mt-5">
        //                 <Card.Img className='w-50 h-50 mt-1 rounded-5' variant="top" src={user?.photoURL} />
        //             </div>
        //             <Card.Body>
        //                 <Card.Title>{user.displayName}</Card.Title>
        //                 <Card.Text>
        //                     {user?.email}
        //                 </Card.Text> 
        //             </Card.Body>
        //             <div>
        //                 <Information
        //                 ></Information>
        //             </div>
        //         </div> */}

        //         <div className="col-md-12">
        //             <form className="my-4 shipping-form w-100 mx-auto shadow-lg p-2 mb-5 bg-body rounded " onSubmit={handleSubmit(onSubmit)}>
        //                 <div className='d-flex justify-content-center align-items-center text-capitalize fw-lighter text-start fw-bolder p-3'>
        //                     <div className='me-5 h-100 w-100 text-uppercase fst-italic'>
        //                         <div>

        //                             {user?.displayName && <div className="mb-3 text-start ">
        //                                 <label for="exampleInputEmail1" className="form-label fs-5">Your Name</label>
        //                                 <input defaultValue={user.displayName} placeholder='Car Name'  {...register("name")}

        //                                     className="form-control w-100 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
        //                             </div>}
        //                             {user?.email && <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5">Your Email </label>
        //                                 <input defaultValue={user.email} placeholder='Modal Number' {...register("email", { required: true })} className="form-control fs-5" id="exampleInputPassword1" />
        //                             </div>}

        //                             {errors.email && <span className="error">This field is required</span>}

        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> Address </label>
        //                                 <input placeholder="address"  {...register("address")} className="form-control fs-5" id="exampleInputPassword1" />

        //                             </div>

        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> Counter</label>
        //                                 <input placeholder='Countery Name'  {...register("countery")} className="form-control fs-5" id="exampleInputPassword1"

        //                                 />

        //                             </div>

        //                         <div className='me-5 h-100 w-100 text-uppercase fst-italic'>

        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> ZipCode</label>
        //                                 <input placeholder='Zip Code'  {...register("zip")} className="form-control fs-5" id="exampleInputPassword1"

        //                                 />

        //                             </div>

        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> Phone Number</label>
        //                                 <input placeholder='Phone Number'  {...register("number")} className="form-control fs-5" id="exampleInputPassword1"

        //                                 />

        //                             </div>
        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> Relegon</label>
        //                                 <input placeholder='Relegon'  {...register("Relegon")} className="form-control fs-5" id="exampleInputPassword1"

        //                                 />

        //                             </div>
        //                             <div className="mb-3 text-start">
        //                                 <label for="exampleInputPassword1" className="form-label fs-5"> Relegon</label>
        //                                 <input placeholder='Relegon'  {...register("Relegon")} className="form-control fs-5" id="exampleInputPassword1"

        //                                 />

        //                             </div>
        //                         </div>

        //                     </div>





        //                 </div>
        //                 <button type="submit" className="btn btn-outline-dark btn-lg mt-5">Submit</button>

        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default YourProfile;