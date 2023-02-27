import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = (props) => {
    const [chosen, setChosen] = useState();
    const [id, setId] = useState();
    const {results, setResults} = props;


    //Function only for the tinkering
    const tinkering = (allData) => {
        axios.get(`${allData.starships[0]}`)
            .then(winner => {allData.starships = winner.data; setResults(allData)})
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // The real solution code below
        // axios.get('https://swapi.dev/api/'+ chosen + id)
        //     .then(response => setResults(response.data))
        //     // .then(response => console.log(response.data))
        //     // .then(response => response.data.results)
        //     .catch(err => console.log(err))
        // }
        

        //Tinkering with the api
        axios.get('https://swapi.dev/api/'+ chosen + id)
            .then(response => {
                const allData = response.data
                console.log(allData)
                allData.starships.length > 0 ? tinkering(allData) : setResults(allData)
                // axios.get(`${allData.starships[0]}`)
                //     .then(winner => {allData.starships = winner.data; setResults(allData)}): ""
            })
                
                // .then(response => console.log(response.data))
                // .then(response => response.data.results)
                .catch(err => console.log(err))
            }

        return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select name="" id="" onChange={ (e) => setChosen(e.target.value)}>
                    <option disabled selected>Please selection an option</option>
                    <option value="people/">People</option>
                    <option value="planets/">Planet</option>
                </select>
                <label>ID: </label>
                <input type="number" onChange={ (e) => setId(e.target.value)}/>
                <input className="btn btn-outline-primary" type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Search