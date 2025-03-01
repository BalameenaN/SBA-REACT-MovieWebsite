import { useState, useEffect } from "react";
import Select from '../components/Select';

export default function TopPanel({type}){

    console.log(type);

    const[genre, setGenre] = useState([]);

    async function getGenre() {
        console.log("inside getGenre");
        const url = `https://imdb236.p.rapidapi.com/imdb/${type}`;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '290b91e8demsh7e995a4d089dc6ep1aa7c8jsn782fd24c33d7',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            //console.log(typeof result);
            setGenre(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getGenre();
    },[]);

    return(
       <>
        <select name={type} id={type}>
       {type == "languages" ? genre.map((g)=>(
        <option value={g.name}>{g.name}</option>
       )): genre.map((g)=>(
        <option value={g}>{g}</option>
       ))}
       </select>
       </>
    )
}