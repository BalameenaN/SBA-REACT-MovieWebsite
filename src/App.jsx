import { useReducer, useState, createContext, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Leftpanel from './components/Leftpanel'

//created context for watchlist state
export const WatchContext = createContext();

//initialstate value is stored from the localstorage for the watchlist page
const initialState = {
  watchItems: JSON.parse(localStorage.getItem('watchItems')) || [],
}

function reducer(watchList, action) {
  console.log(action.payload)
  switch (action.type) {
    case "ADD":
      const newArr = [...watchList.watchItems, action.payload];
      localStorage.setItem('watchItems', JSON.stringify(newArr));
      return { ...watchList, watchItems: newArr }

    case "REMOVE":
      const Arr = watchList.watchItems.filter((w) => w != action.payload);
      localStorage.setItem('watchItems', JSON.stringify(Arr));
      return { ...watchList, watchItems: Arr }

    default:
      return watchList;
  }
}

function App() {

  //console.log("initialState", initialState)
  //state for all the 3 seperate pages
  const [watchList, dispatch] = useReducer(reducer, initialState);
  const [film, setFilm] = useState([]);
  const [tvShow, setTvShow] = useState([]);

  //common function which loads all the film and tvshow from API
  async function getFilm(value) {
    console.log("inside async");
    const url = `https://imdb236.p.rapidapi.com/imdb/top250-${value}`;
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
      if (value == "movies") {
        setFilm(result);
        console.log("insidde if");
      }
      else if (value == "tv") {
        setTvShow(result);

      }

    } catch (error) {
      console.error(error);
    }
  }
  //console.log(tvShow, "inside else");

  //useEffect which fetches data from API
  useEffect(() => {
    console.log("inside effect");
    getFilm("movies");
    getFilm("tv");
  }, []);

  return (
    <>
      <WatchContext.Provider value={{ watchList, dispatch }}>
        <Header />
        <div className='main-container'>
        <Leftpanel film={film} setFilm={setFilm} tvShow={tvShow} setTvShow={setTvShow} />
        </div>
      </WatchContext.Provider>
    </>

  )

}

export default App
