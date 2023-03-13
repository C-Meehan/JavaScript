import React, {useState} from 'react'
import axios from 'axios';

const PersonForm = (props) => {
    // const {people, setPeople} = props;
    const {initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});

        // axios.post('http://localhost:8000/api/people', {
        //     firstName,
        //     lastName
        // })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //         setPeople([...people, res.data]);
        //     })
        //     .catch(err => console.log(err))
    }

    return (
        // onSubmit = {onSubmitHandler} code on platform does not have this in the form/ weird, don't understand
        <form>
            <p>
                <label>First Name</label><br/>
                <input type = "text" name="firstName" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type = "text" name="lastName" value={lastName} onChange = {(e) => setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;