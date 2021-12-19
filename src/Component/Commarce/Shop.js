import React, { useEffect, useState } from 'react';
import './Shop.css'
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../Login/fakedb';
import Cart from './Cart';
import Products from './Products';
import useCart from './useCart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart()
    const [display, setDisplay] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setDisplay(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / 10)
                setPageCount(pageNumber)
            })
    }, [page])

    const handleAddTOCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, product]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDb(product.key)
    }
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                const addeddedProduct = products.find(product => product.key === key)
                if (addeddedProduct) {
                    const quantity = savedCart[key]
                    addeddedProduct.quantity = quantity
                    storedCart.push(addeddedProduct)

                }
            }
            setCart(storedCart)
        }
    }, [products])
    const handleSerch = e => {
        const searchText = e.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))

        // console.log(matchedProducts);
        setDisplay(matchedProducts)
    }


    return (
        <div>
            <div className="container my-5">
                <div class="mb-3 mx-auto w-50 text-start">
                    <label for="exampleInputEmail1" className=" fs-3 mb-3 form-label fw-5 text-uppercase fst-italic font-monospace">Search Products</label>
                    <input placeholder='Search Products'  onChange={handleSerch} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <h3>Products: {display.length} </h3>
                        {
                            display.map(product => <Products
                                product={product}
                                handleAddTOCart={handleAddTOCart}
                            ></Products>)
                        }
                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()].map(number => <button className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)

                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Cart

                            cart={cart}

                        >
                            <Link to='/orderrevew'>
                                <button className='btn btn-outline-dark'> Revew Your Order</button>
                            </Link>

                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;