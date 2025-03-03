
export default function Watchlist({film, setFilm}){
       const { watchList, dispatch } = useContext(WatchContext);

       function removefavHandle(id){
          
        dispatch({type:"REMOVE", payload: id});

       }
       
       const filteredList = film.map((f)=>{
        return(
            <>
            {(watchList.includes(f.id)) ? <div className="list">
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