import { useState, useEffect } from "react";


export default function TopPanel({ type, fn, genOpt }) {

    //console.log(type);

    const [genre, setGenre] = useState([]);

    //Generic function to fetch list of genres and language from API
    async function getGenre() {
        console.log("inside getGenre");
        const url = `https://imdb236.p.rapidapi.com/imdb/${type}`;
        //console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'eb680fb08amsh9050dcef2abe80bp1c0635jsnb9a0e7859341',
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

    useEffect(() => {
        getGenre();
    }, []);

    function handleChange(e) {
        console.log("inside handle function");
        fn(e.target.value);
        //console.log(genOpt);
    }

    return (
        <>
            <select className="select-container" key={type} value={genOpt} name={type} id={type} onChange={handleChange}>
                <option value="">Select {type}</option>

                {type == "languages" ? genre.map((g) => (
                    <>
                        <option value={g.name}>{g.name}</option>
                    </>
                )) : genre.map((g) => (
                    <>
                        <option key={g.id} value={g}>{g}</option>
                    </>
                ))}
            </select>
        </>
    )
}