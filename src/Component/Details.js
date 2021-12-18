import React, { useEffect, useState } from 'react';
import { Card, Carousel, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from './Login/useAuth';
const Details = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [single, setSingle] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/details/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-3'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={single.img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={single.imgone}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={single.imgtwo}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className=" my-5">
                        <div className=" justify-content-center align-items-center text-capitalize fw-lighter text-start fw-normal">
                            <h4 className='text-muted fs-3'> Car Name:{single.name}</h4>
                            <p className='fs-5'> match: {single.match}</p>
                            <p className='fs-5'> Safety: {single.Safety}</p>
                            <p className='fs-5'> Price: ${single.price}</p>
                            <p className='fs-5'> Rating: {single.Rating}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>

                    <form className="shipping-form w-75 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3 text-start ">
                            <label for="exampleInputEmail1" className="form-label fs-5">User Name</label>
                            <input defaultValue={user.displayName} {...register("name")} className="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label fs-5">User Email</label>
                            <input defaultValue={user.email} {...register("email", { required: true })} className="form-control fs-5" id="exampleInputPassword1" />
                        </div>

                        {errors.email && <span className="error">This field is required</span>}

                        {single.name && <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label fs-5">Car name</label>
                            <input defaultValue={single.name} placeholder="Address"  {...register("productName")} className="form-control fs-5" id="exampleInputPassword1" />

                        </div>}
                        {single.price && <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label fs-5">price</label>
                            <input defaultValue={single?.price} placeholder="Address"  {...register("price")} className="form-control fs-5" id="exampleInputPassword1" />

                        </div>}
                        {



                            single?.img &&
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label fs-5">Img Src</label>
                                <input defaultValue={single.img} {...register("img")} className="form-control fs-5" id="exampleInputPassword1"

                                />

                            </div>


                        }
                        <div className="mb-3 text-start">

                            <label for="exampleInputPassword1" className="form-label fs-5">City Name</label>
                            <input placeholder="City"  {...register("city")} className="form-control fs-5" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">

                            <label for="exampleInputPassword1" className="form-label fs-5">Zip Code</label>
                            <input placeholder="City"  {...register("zip")} className="form-control fs-5" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label fs-5">Number</label>
                            <input placeholder="phone number" {...register("phone")} className="form-control fs-5" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 text-start">


                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-lg">Submit</button>
                    </form>
                </div>
            </div>
            <div className="row">


                <div className='col-md-7'>
                    <Table striped bordered hover>
                        <thead>
                            <h4>Basics</h4>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}>color </td>
                                <td>{single.color}</td>
                            </tr>
                            <tr>

                                <td colSpan={2}>Interior color  </td>
                                <td>{single.colort}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Exterior color  </td>
                                <td>{single.Exterior}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>MPG</td>
                                <td>{single.MPG}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Mileage</td>
                                <td>{single.Mileage}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Transmission</td>
                                <td>{single.Transmission}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table className='mt-5' striped bordered hover>
                        <thead>
                            <h4>Features</h4>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}>Convenience </td>
                                <td>{single.Convenience}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Drivetrain </td>
                                <td>{single.Drivetrain}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Engine </td>
                                <td>{single.Engine}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Entertainment </td>
                                <td>{single.Entertainment}</td>
                            </tr>
                            <tr>

                                <td colSpan={2}>Exterior </td>
                                <td>{single.Exterior}</td>
                            </tr>

                        </tbody>
                    </Table>

                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center text-capitalize fw-lighter lh-lg text-start fw-normal">
                    <div className=''>
                        <h3>Seller’s notes about this car</h3>
                        {single.sellers}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-10">
                    <h1 className='mt-5 text-muted'>Dramatic Dynamic Improvements</h1>
                    <h3 className='text-capitalize fw-lighter lh-base text-start fw-normal'>{single.play}</h3>
                    <h1 className='mt-5 text-muted'>Distinctive Style</h1>
                    <h5 className='text-capitalize fw-lighter lh-base text-start fw-normal'>{single.big}</h5>

                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    );
};

export default Details;






// <a href="https://imgbb.com/"><img src="https://i.ibb.co/VqHTFZH/car.jpg" alt="car" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/q1mTWxW/download-1.jpg" alt="download-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/rHTCXQb/download-2.jpg" alt="download-2" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/qpHjdLd/download-3.jpg" alt="download-3" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Jpkj32n/download-4.jpg" alt="download-4" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/kM2LSxN/download-5.jpg" alt="download-5" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/qBFFyn8/download-6.jpg" alt="download-6" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZH7cT8v/download-7.jpg" alt="download-7" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Z2mq1tw/download-8.jpg" alt="download-8" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/KxPn1GR/download.jpg" alt="download" border="0"></a>








// <a href="https://imgbb.com/"><img src="https://i.ibb.co/t41V1zR/images-26.jpg" alt="images-26" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/R3yHVCV/images-27.jpg" alt="images-27" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/VCRDQGZ/images.jpg" alt="images" border="0"></a>
