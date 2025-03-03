import { Link, Routes, Route } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import TopPanel from './Toppanel'
import Watchlist from './Watchlist'
import { WatchContext } from '../App'



export default function Leftpanel({film, setFilm}) {

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
                <Link to='/Watchlist'>
                    <div>Watchlist</div>
                </Link>
            </nav>

            <Routes>
                <Route path="/all" element={<Allfilm film={film} setFilm={setFilm}/>} />
                <Route path="/Tvshows" element={<Tvshow />} />
                <Route path="/Watchlist" element={<Watchlist film={film} setFilm={setFilm}/>} />
            </Routes>
        </>
    )
}

function Allfilm({film , setFilm}) {
    const [movOpt, setMovOpt] = useState("");
    const { watchList, dispatch } = useContext(WatchContext);

   /* async function getFilm() {
        console.log("inside async");
        const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
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
            setFilm(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log("inside effect");
        getFilm();
    }, []);*/

    function listing(l) {
        const val = l.genres;
        if (val.includes(movOpt)) {
            return (
                <>
                    <div className="list">
                        <img src={l.primaryImage} />
                        <p>{l.originalTitle}</p>
                        <button className="favourite" onClick={()=> moviefavHandle(f.id)}>Add to watchlist</button>
                    </div>
                </>
            )
        }
    }

    //console.log(film);
    /* const movieList = film.map((f)=>{
         return(
             <div className="list">
            <img src={f.primaryImage} />
            <p>{f.originalTitle}</p>
            <button>Add to watchlist</button>
            </div>
         )
     })*/

    function moviefavHandle(id){

        dispatch({type: "ADD" , payload: id});

    }

    const movieList = film.map((f) => {
        return (
            <>
                {(movOpt != "") ? listing(f) : <div className="list">
                    <img src={f.primaryImage} />
                    <p>{f.originalTitle}</p>
                    <button className="favourite" onClick={()=> moviefavHandle(f.id)}>Add to watchlist</button>
                </div>}

            </>
        )
    })

    return (
        <>
            <TopPanel type={"genres"} fn={setMovOpt} genOpt={movOpt} />
            <TopPanel type={"languages"} />
            <div className="container">
                {movieList}
            </div>
        </>
    )
}

function Tvshow() {
    const [tvShow, setTvShow] = useState([]);
    const [genOpt, setGenOpt] = useState("");

    async function getShow() {
        console.log("inside async");
        const url = 'https://imdb236.p.rapidapi.com/imdb/top250-tv';
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
            setTvShow(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getShow();
    }, []);

    function listing(l) {
        const val = l.genres;
        if (val.includes(genOpt)) {
            return (
                <>
                    <div className="list">
                        <img src={l.primaryImage} />
                        <p>{l.originalTitle}</p>
                        <button className="favourite" onClick={()=>tvfavHandle}>Add to watchlist</button>
                    </div>
                </>
            )
        }
    }

    const showList = tvShow.map((t) => {
        return (
            <>
                {(genOpt != "") ? listing(t) : <div className="list">
                    <img src={t.primaryImage} />
                    <p>{t.originalTitle}</p>
                    <button className="favourite" onClick={()=>tvfavHandle}>Add to watchlist</button>
                </div>}

            </>
        )
    })


    return (
        <>
            <TopPanel type={"genres"} fn={setGenOpt} genOpt={genOpt} />
            <TopPanel type={"languages"} />
            <div className="container">
                {showList}
            </div>
        </>
    )
}