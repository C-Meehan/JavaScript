import React, {useEffect, useState} from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, []);
    console.log(pokemon);

    return (
        <div>
            <div>Pokemon List</div>
            <ol>
            {
                pokemon.map((pokemon, index) => {
                    return (
                            <li key={index}>{pokemon.name}</li>
                            )
                        })
            }
            </ol>
        </div>
    )
}

export default Pokemon