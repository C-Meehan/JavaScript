import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const AuthorDetail = (props) => {

    const [author, setAuthor] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                navigate("/")
                // removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{author.name}</h2>
            <button className='btn btn-danger' onClick={(e) => {deleteAuthor(author._id)}}>Delete</button>
        </div>
    )
}

export default AuthorDetail