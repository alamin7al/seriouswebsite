import { useEffect, useState } from 'react';
import { getStoredCart } from '../Login/fakedb';

const useCart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getStoredCart()
        const keys = Object.keys(savedCart)
        console.log(keys);
        fetch('http://localhost:5000/products/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                if (products.length) {
                    const storedCart = []
                    for (const key in savedCart) {
                        const addededProduct = products.find(product => product.key === key)
                        if (addededProduct) {
                            const quantity = savedCart[key]
                            addededProduct.quantity = quantity
                            storedCart.push(addededProduct)
                        }
                    }
                    setCart(storedCart)

                }
            })

    }, [cart])
    return [cart, setCart]
};

export default useCart;