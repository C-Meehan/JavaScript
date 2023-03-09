import React, {useState} from 'react'
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';

const Main = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <AllProducts products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main;