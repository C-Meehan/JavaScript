import React from 'react'


const Display = (props) => {
    const {results} = props;
    // const {starships} = results;

    return (
        <div>
            <h1>{results.name? `Name: ${results.name}`: ""}</h1>
            <h3>{results.height? `Height: ${results.height}` : ""}</h3>
            <h3>{results.hair_color? `Hair Color: ${results.hair_color}`:""}</h3>
            <h3>{results.eye_color? `Eye Color: ${results.eye_color}`:""}</h3>
            <h3>{results.skin_color? `Skin Color: ${results.skin_color}`:""}</h3>
            <h3>{results.starships?.name? `Starship: ${results.starships?.name}`:""}</h3>
            {/* {console.log(results.starships?.name)} */}
        </div>
    )
}

export default Display