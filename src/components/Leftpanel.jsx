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
                <div className="leftpanel">
                    <Link className="links" to='/'>
                        <h4 >Films</h4>
                    </Link>
                    <Link className="links" to='/Tvshows'>
                        <h4>Tv shows</h4>
                    </Link>
                    <Link className="links" to='/Watchlist'>
                        <h4>Watchlist</h4>
                    </Link>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Allfilm film={film} setFilm={setFilm} />} />
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
                        <h4>{l.originalTitle}</h4>
                        <button className="favourite" onClick={() => moviefavHandle(f.id)}>Add to watchlist</button>
                    </div>
                </>
            )
        }
    }

    function moviefavHandle(id) {

        dispatch({ type: "ADD", payload: id });

    }

    /* const movieList = film.map((f) => {
         return (
             <>
                 <div className="list-container">
                     {(movOpt != "") ? listing(f) : <div className="list">
                         <img src={f.primaryImage} />
                         <h4>{f.originalTitle}</h4>
                         <button className="favourite" onClick={() => moviefavHandle(f.id)}>Add to watchlist</button>
                     </div>}
                 </div>
             </>
         )
     })*/

    const filtered = film.filter((t) => t.genres.includes(movOpt));

    const movieList = (((movOpt != "")) ? filtered : film).map((t) => {

        return (
            <>
                <div className="list-container">
                    <div className="list">
                        <img className="image" src={t.primaryImage} />
                        <h4>{t.originalTitle}</h4>
                        <button className="favourite" onClick={() => moviefavHandle(t.id)}>Add to watchlist</button>
                    </div>
                </div>
            </>
        )
    })


    return (
        <>
            <div className="toppanel">
                <div className="drop-down">
                    <TopPanel type={"genres"} fn={setMovOpt} genOpt={movOpt} />
                    <TopPanel type={"languages"} />
                </div>
                <div className="container">
                    {movieList}
                </div>
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
    /* function listing(l) {
         const val = l.genres;
         
             return (
                 <>
                  {(val.includes(genOpt))?<div className="list">
                         <img src={l.primaryImage} />
                         <h4>{l.originalTitle}</h4>
                         <button className="favourite" onClick={() => tvfavHandle(l.id)}>Add to watchlist</button>
                     </div> : <></>} 
                 </>
             )
         
     }
 
     const showList = tvShow.map((t) => {
 
         return (
             <>
                  <div className="list-container">
                 {(genOpt != "") ? listing(t) : <div className="list">
                     <img src={t.primaryImage} />
                     <h4>{t.originalTitle}</h4>
                     <button className="favourite" onClick={() => tvfavHandle(t.id)}>Add to watchlist</button>
                 </div>}
                 </div>
             </>
         )
     })*/

    /*function filteringShow(){
   
       const filtered = tvShow.filter((t)=> t.genres.includes(genOpt));
   
       if(genOpt != ""){
            
            console.log("inside if function");
            console.log(genOpt);
            const showList = filtered.map((t) => {
   
               return (
                   <>
                        <div className="list-container">
                        <div className="list">
                           <img src={t.primaryImage} />
                           <h4>{t.originalTitle}</h4>
                           <button className="favourite" onClick={() => tvfavHandle(t.id)}>Add to watchlist</button>
                       </div>
                       </div>
                   </>
               )
           })
          return showList;         
           
       } else{
           console.log("inside else function");
           const showList = tvShow.map((t) => {
   
               return (
                   <>
                        <div className="list-container">
                        <div className="list">
                           <img src={t.primaryImage} />
                           <h4>{t.originalTitle}</h4>
                           <button className="favourite" onClick={() => tvfavHandle(t.id)}>Add to watchlist</button>
                       </div>
                       </div>
                   </>
               )
           })
          return showList;  
   
       }
   
   }*/

    const filtered = tvShow.filter((t) => t.genres.includes(genOpt));

    const showList = (((genOpt != "")) ? filtered : tvShow).map((t) => {

        return (
            <>
                <div className="list-container">
                    <div className="list">
                        <img className="image" src={t.primaryImage} />
                        <h4>{t.originalTitle}</h4>
                        <button className="favourite" onClick={() => tvfavHandle(t.id)}>Add to watchlist</button>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="toppanel">
                <div className="drop-down">
                    <TopPanel type={"genres"} fn={setGenOpt} genOpt={genOpt} />
                    <TopPanel type={"languages"} />
                </div>
                <div className="container">
                    {showList}
                </div>
            </div>
        </>
    )
}