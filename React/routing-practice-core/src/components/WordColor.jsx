import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = () => {
    const {someword} = useParams();
    const {color1} = useParams();
    const {color2} = useParams();

    if (isNaN(someword)){
        return (
            <div style={{color: color1, backgroundColor: color2}}>The word is: {someword}</div>
        )
    }
    return (
        <h1>Wronggggg</h1>
    )


    }

export default WordColor