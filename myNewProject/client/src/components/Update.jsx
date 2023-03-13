import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {

    const {id} = props;
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = personParam => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {
                loaded && (
                    <>
                        <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName}/>
                        <DeleteButton personId={person._id} successCallback={() => navigate("/")}/>
                    </>
            )}
            {/* <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name='firstName' value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name='lastName' value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                </p>
                <input type="submit" value="Update"/>
            </form> */}
        </div>
    )
}

export default Update