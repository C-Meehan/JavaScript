import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {num} = useParams();

    if (isNaN(num)){
        return (
            // <h1>Not a valid number</h1>
            <h1>The word is: {num}</h1>
        )
    }

    return (
        <div>You chose number {num}</div>
    )
}

export default Number