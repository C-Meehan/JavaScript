import React, {useState} from 'react'
import axios from "axios";

const ProductForm = (props) => {

    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({
        title: "",
        price: "",
        description: ""
    });

    const createProduct = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.post("http://localhost:8000/api/products", {
                title,
                price,
                description
            })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.product);
                    setProducts([...products, res.data.product]);
    
                })
                .catch((err) => {
                    console.log(err);
                })
                setTitle("");
                setPrice(0);
                setDescription("");
                setErrors({})
            }
    }

    // const onChangeHandler = (e) => {
    //     setTitle([e.target.title]: e.target.value)
    // }

    const formValidator = () => {
        let isValid = true
        if (title.length < 3) {
            console.log("in TITLE")
            isValid = false
            setErrors({...errors, title: "Title must be at least 3 characters"})
        }
        if (price < 1) {
            console.log("in PRICEEEE")
            isValid = false
            setErrors({...errors, price: "Price must be at least 1"})
        }
        if (description.length < 3) {
            console.log("in descriptionnnnnn")
            isValid = false
            setErrors({...errors, description: "Description must be at least 3 characters"})
        }
        console.log(title)
        console.log(price)
        console.log(description)
        console.log(errors)
        return isValid
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form className="col-md-6 offset-2" onSubmit={createProduct}>
                <div className="form-group">
                    {errors.title ? <p className='text-danger'>{errors.title}</p> : null}
                    <label>Title</label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    {errors.price ? <p className='text-danger'>{errors.price}</p> : null}
                    <label>Price</label>
                    <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    {errors.description ? <p className='text-danger'>{errors.description}</p> : null}
                    <label>Description</label>
                    <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input  className="btn btn-primary mt-3" type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;