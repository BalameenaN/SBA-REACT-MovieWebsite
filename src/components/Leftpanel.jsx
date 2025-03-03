import { Link, Routes, Route } from "react-router-dom"
import { useState, useContext } from 'react'
import TopPanel from './Toppanel'
import Watchlist from './Watchlist'
import { WatchContext } from '../App'

export default function Leftpanel({ film, setFilm, tvShow, setTvShow }) {

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
                <Route path="/all" element={<Allfilm film={film} setFilm={setFilm} />} />
                <Route path="/Tvshows" element={<Tvshow tvShow={tvShow} setTvShow={setTvShow} />} />
                <Route path="/Watchlist" element={<Watchlist film={film} setFilm={setFilm} tvShow={tvShow} setTvShow={setTvShow} />} />
            </Routes>
        </>
    )
}

//component for loading all the film
function Allfilm({ film, setFilm }) {
    const [movOpt, setMovOpt] = useState("");
    const { watchList, dispatch } = useContext(WatchContext);

    //function for displaying only the selected genre
    function listing(l) {
        const val = l.genres;
        if (val.includes(movOpt)) {
            return (
                <>
                    <div className="list">
                        <img src={l.primaryImage} />
                        <p>{l.originalTitle}</p>
                        <button className="favourite" onClick={() => moviefavHandle(f.id)}>Add to watchlist</button>
                    </div>
                </>
            )
        }
    }

    function moviefavHandle(id) {

        dispatch({ type: "ADD", payload: id });

    }

    const movieList = film.map((f) => {
        return (
            <>
                {(movOpt != "") ? listing(f) : <div className="list">
                    <img src={f.primaryImage} />
                    <p>{f.originalTitle}</p>
                    <button className="favourite" onClick={() => moviefavHandle(f.id)}>Add to watchlist</button>
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

//component for loading all tvshow
function Tvshow({ tvShow, setTvShow }) {
    const [genOpt, setGenOpt] = useState("");
    const { watchList, dispatch } = useContext(WatchContext);

    function tvfavHandle(id) {
        dispatch({ type: "ADD", payload: id });
    }
    
    //function for displaying only the selected genre
    function listing(l) {
        const val = l.genres;
        if (val.includes(genOpt)) {
            return (
                <>
                    <div className="list">
                        <img src={l.primaryImage} />
                        <p>{l.originalTitle}</p>
                        <button className="favourite" onClick={() => tvfavHandle(l.id)}>Add to watchlist</button>
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
                    <button className="favourite" onClick={() => tvfavHandle(t.id)}>Add to watchlist</button>
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