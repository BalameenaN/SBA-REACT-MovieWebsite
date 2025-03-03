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
                'x-rapidapi-key': '6593e3c408msh0725bf29aa2cc1ap179f86jsn3715aef84ede',
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