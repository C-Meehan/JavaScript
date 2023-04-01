import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateAuthor = () => {

    const [authorList, setAuthorList] = useState("");
    const [name, setName] = useState("");
    // const [title, setTitle] = useState("");
    // const [pages, setPages] = useState("");
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
                // setTitle("");
                // setPages("");
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.error.errors);
                setError(err.response.data.error.errors);
            })
    }

    return (
        <div className='col-md-6 mx-auto border border-dark p-2'>
            <Link to={'/'}>Home</Link>
            <h3>Add a new author:</h3>
            {error.name ? <p className='text-danger'>{error.name.message}</p> : ""}
            <form className="col-md-6 mx-auto" onSubmit={createAuthor}>
                <div className='form-group'>
                    <label>Name: </label>
                    <input className='form-control border-success text-capitalize' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                {/* {error.title ? error.title.message : ""}
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                {error.pages ? error.pages.message : ""}
                <label>Pages: </label>
                <input type="text" value={pages} onChange={(e) => setPages(e.target.value)}/> */}

                <Link to={"/"} className="btn btn-warning m-2" >Cancel</Link>
                <input className="btn btn-primary m-2" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateAuthor