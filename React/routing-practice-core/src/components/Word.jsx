import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    const {word} = useParams();

    if (isNaN(word)){
        return (
            <div>The word is: </div>
        )
    }

    return (
        <h1>You did not choose a word</h1>
    )
}

export default Word