import { useContext } from 'react'
import { WatchContext } from '../App'

export default function Watchlist({ film, setFilm, tvShow, setTvShow }) {
    const { watchList, dispatch } = useContext(WatchContext);
    console.log(tvShow);
    console.log(watchList);

    function removefavHandle(id) {

        dispatch({ type: "REMOVE", payload: id });

    }

    //filtering the required film from all the film
    const filteredList = film.map((f) => {
        return (
            <>
                {(watchList.watchItems.includes(f.id)) ? <div className="list">
                    <img className="image" src={f.primaryImage} />
                    <p>{f.originalTitle}</p>
                    <button className="favourite" onClick={() => removefavHandle(f.id)}>Remove</button>
                </div> : " "}
            </>
        )
    })

    //filtering the required show from all the show
    const filteredShow = tvShow.map((t) => {
        return (
            <>
                {(watchList.watchItems.includes(t.id)) ? <div className="list">
                    <img className="image" src={t.primaryImage} />
                    <p>{t.originalTitle}</p>
                    <button className="favourite" onClick={() => removefavHandle(t.id)}>Remove</button>
                </div> : " "}
            </>
        )
    })

    return (
        <>
            <div className='watchlist'>
                <div>
                    <h2>WATCHLIST</h2>
                </div>
                <div className='container'>
                    {filteredList}
                    {filteredShow}
                </div>
            </div>
        </>
    )
}