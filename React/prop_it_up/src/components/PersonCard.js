import React from 'react';

const PersonCard = (props) => {
    return (
        <div className = "main">
            <h2>{props.last}, {props.first}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </div>
    )
}

export default PersonCard;