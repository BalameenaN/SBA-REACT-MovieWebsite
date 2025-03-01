import { Link, Routes, Route } from "react-router-dom"
import {useEffect, useState} from 'react'

export default function Leftpanel() {
      console.log('inside Leftpanel');
    return (
        <>
            <nav>
                <Link to='/all'>
                    <div>All Films</div>
                </Link>
                <Link to='/Tvshows'>
                    <div>Tv shows</div>
                </Link>
            </nav>

            <Routes>
                <Route path="/all" element={<Allfilm />} />
                <Route path="/Tvshows" element={<Tvshow />} />
            </Routes>
        </>
    )
}

function Allfilm() {
    const [film, setFilm] = useState([]);
    async function getFilm() {
        console.log("inside async");
        const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
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
            setFilm(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        console.log("inside effect");
        getFilm();
    },[]);
         
    //console.log(film);
    const movieList = film.map((f)=>{
        return(
            <div className="list">
           <img src={f.primaryImage} />
           <p>{f.originalTitle}</p>
           </div>
        )
    })

    return (
        <>
        <div className="container">
            {movieList}   
        </div>
        </>
    )
}

function Tvshow() {
    const [tvShow, setTvShow] = useState([]);

    async function getShow() {
        console.log("inside async");
        const url = 'https://imdb236.p.rapidapi.com/imdb/top250-tv';
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
            setTvShow(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getShow();
    },[]);

    const showList = tvShow.map((t)=>{
        return(
            <div className="list">
                <img src={t.primaryImage} />
                <p>{t.originalTitle}</p>
            </div>
        )
    })


    return (
        <div className="container">
            {showList}
        </div>
    )
}