import { useState, useEffect } from "react";


export default function TopPanel({type,fn,genOpt}){

    //console.log(type);

    const[genre, setGenre] = useState([]);
   

    async function getGenre() {
        console.log("inside getGenre");
        const url = `https://imdb236.p.rapidapi.com/imdb/${type}`;
        //console.log(url);
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

    function handleChange(e){
        console.log("inside handle function");
         fn(e.target.value);
         //console.log(genOpt);
    }

    return(
       <>
        <select value={genOpt} name={type} id={type} onChange={handleChange}>
        <option value="">Select {type}</option>    
           
       {type == "languages" ? genre.map((g)=>(
        <>
        <option value={g.name}>{g.name}</option>
        </>
         )): genre.map((g)=>(
        <>
        <option value={g}>{g}</option>
        </>
       ))}
       </select>
       </>
    )
}