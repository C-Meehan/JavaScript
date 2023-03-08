import React, {useState} from 'react'
import axios from "axios";

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);

                setTitle("");
                setPrice(0);
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={createProduct}>
                <div className="form-fields">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-fields">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-fields">
                    <label>Title</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm