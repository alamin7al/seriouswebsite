import  { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    },[])
    return [products]
};

export default useProduct;