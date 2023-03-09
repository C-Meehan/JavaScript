import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            {/* <p>{product.title}</p> */}
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                )})
            }
        </div>
    )
}

export default AllProducts