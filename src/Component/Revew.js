import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

    state = {
        data: []
    }
    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:5000/revew');
            const data = await res.json()
            console.log(data);
            this.setState({ data: data })
        } catch (error) {
            console.log(error);
        }

    }
    render() {
        const { data } = this.state
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='my-5 align-items-center justyfy-content-center d-flex' >

                <div className="container">
                    <div className="row">
                    <p className='fs-3 fst-normal text-capitalize text-nowrap bd-highlight font-monospace text-start'>Revew Our WEbsite</p>

                        <div className="">
                            <Slider {...settings}>
                                {
                                    data.map(item => {
                                        return <div className="  ">
                                            <img src={item?.img} className="mt-3 rounded mx-auto d-block w-25 h-50 img-fluid mx-auto card-img-top" alt="..." />
                                            <div className="w-75 mx-auto">
                                                <h5 className="card-title    fs-3 fw-normal">{item.name}</h5><hr />
                                                <p className="card-text    fs-5 ">{item.desc.slice(0, 130)}</p>
                                                <p className="card-text    fs-5 ">Rating: 4.5</p>

                                            </div>
                                        </div>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}