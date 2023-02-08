import React, {useState} from 'react';

const PersonCard = (props) => {
    const [currentAge, setCurrentAge] = useState(props.age);
    return (
        <div className = "main">
            <h2>{props.last}, {props.first}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={(event) => setCurrentAge(currentAge + 1)}>Birthday Button for {props.first} {props.last}</button>
        </div>
    )
}

export default PersonCard;