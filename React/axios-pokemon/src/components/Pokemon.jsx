import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemon(response.data.results))
        // .then(response => console.log(response))
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