import { useReducer, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Leftpanel from './components/Leftpanel'

export const WatchContext = createContext();


const initialState ={
  watchItems : JSON.parse(localStorage.getItem('watchlist')) || [],
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
    localStorage.setItem('watchItems',JSON.stringify(newArr));
      return {...watchList, watchItems:newArr}
  
      default:
        return watchList;
  }
}

function App() {

  const [watchList, dispatch] = useReducer(reducer, initialState );
  const [film, setFilm] = useState([]);

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
