import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../Login/fakedb';
import Cart from './Cart';
import RevewItem from './RevewItem';
import useCart from './useCart';
import useProduct from './useProduct';

const OrderRevew = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        setCart([])
        clearTheCart()
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(product => <RevewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        ></RevewItem>)
                    }
                </div>
                <div className="col-md-2">
                    <Cart cart={cart}
                    >
                        <Link to='/placeorder'>
                            <button onClick={handlePlaceOrder} className='btn btn-outline-dark'>Place Order</button>

                        </Link>

                    </Cart>

                </div>
            </div>

        </div>
    );
};

export default OrderRevew;