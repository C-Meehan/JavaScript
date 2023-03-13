import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    // const {removeFromDom, people, setPeople} = props;
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
            console.log(res.data);
            setPeople(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
}    
    // const deletePerson = (personId) => {
    //     axios.delete('http://localhost:8000/api/people/' + personId)
    //         .then(res => {
    //             removeFromDom(personId)
    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <div>
            {
                people.map((person, index)=>{
                    return (
                        <div key={index}>
                            {/* <p>{person.lastName}</p>
                            <p>{person.firstName}</p> */}
                            <Link to={`/people/${person._id}`}> {person.firstName} {person.lastName} </Link>
                            |
                            <Link to={"/people/edit/" + person._id}> Edit </Link>
                            |
                            <DeleteButton personId={person._id} successCallback={() => removeFromDom(person._id)}/>
                        </div>
                )})
            }
        </div>
    )
}

export default PersonList