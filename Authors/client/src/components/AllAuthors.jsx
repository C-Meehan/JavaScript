import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);

    const removeFromDom = authorId => {
        setAuthorList(authorList.filter(author => author._id !== authorId));
    }

    console.log(authorList.sort());

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="allAuthors">
            <Link to={"/authors/create"}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {/* {
                    // authorList.sort((a, b) => (a.name > b.name) ? 1 : -1)
                } */}
                {
                    authorList.map((author, index) => {
                        return (
                            // <div key={index}>
                                <tr key={index}>
                                    <th scope="row">{author.name}</th>
                                    <td><Link to={`/authors/edit/${author._id}`} className="btn btn-warning">Edit</Link> <button className="btn btn-danger" onClick={(e) => {deleteAuthor(author._id)}}> Delete </button></td>
                                </tr>
                            // </div>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors