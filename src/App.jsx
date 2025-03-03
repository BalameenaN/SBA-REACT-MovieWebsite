import { useReducer, useState, createContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Leftpanel from './components/Leftpanel'

export const WatchContext = createContext();

const initialState ={
  watchItems : JSON.parse(localStorage.getItem('watchItems')) || [],
  }

function reducer(watchList,action){
    console.log(action.payload)
  switch(action.type){
    case "ADD":
      const newArr =[...watchList.watchItems, action.payload];
      localStorage.setItem('watchItems',JSON.stringify(newArr));
      return {...watchList, watchItems:newArr}
  
  case "REMOVE":
    const Arr = watchList.watchItems.filter((w)=> w != action.payload );
    localStorage.setItem('watchItems',JSON.stringify(Arr));
      return {...watchList, watchItems:Arr}
  
      default:
        return watchList;
  }
}

function App() {

    //console.log("initialState", initialState)

  const [watchList, dispatch] = useReducer(reducer, initialState );
  const [film, setFilm] = useState([]);

  async function getFilm() {
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
      }, []);

  return(
    <>
    <WatchContext.Provider value={{watchList,dispatch}}>
     <Header />
     <div className='top-panel'>
     </div>
     <Leftpanel film={film} setFilm={setFilm}/>
     </WatchContext.Provider>
    </>
   
  )
  
}

export default App
