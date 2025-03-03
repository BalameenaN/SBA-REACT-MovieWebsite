import { useContext } from 'react'
import { WatchContext } from '../App'

export default function Watchlist({film, setFilm}){
       const { watchList, dispatch } = useContext(WatchContext);
       console.log(film);
       console.log(watchList);

       function removefavHandle(id){
          
        dispatch({type:"REMOVE", payload: id});

       }
       
       const filteredList = film.map((f)=>{
        return(
            <>
            {(watchList.watchItems.includes(f.id)) ? <div className="list">
                    <img src={f.primaryImage} />
                    <p>{f.originalTitle}</p>
                    <button className="favourite" onClick={()=> removefavHandle(f.id)}>Remove</button>
                </div> :" " }
            </>
        )
       })

    return(
        <>
          {filteredList}
        </>
    )
}