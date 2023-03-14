import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateAuthor = () => {

    const [authorList, setAuthorList] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const createAuthor = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", {name})
            .then(res => {
                console.log(res);
                console.log(res.data);
                setAuthorList([...authorList, res.data.author])
                setName("");
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.error.errors);
                setError(err.response.data.error.errors);
            })
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={createAuthor}>
                {error.name ? error.name.message : ""}
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <Link to={"/"} className="btn btn-warning">Cancel</Link>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateAuthor