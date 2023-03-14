import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom'

const UpdateAuthor = () => {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/authors/" + id,  {name})
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                setError(err.response.data.error.errors);
            })
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h3>Edit this author</h3>
            <form onSubmit={updateAuthor}>
                {error.name ? error.name.message : ""}
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                <Link to={"/"} className="btn btn-warning" >Cancel</Link>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UpdateAuthor