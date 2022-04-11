import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Destination from './component/Destination';
import Crew from './component/Crew';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import { useState, createContext } from "react";
import Technology from './component/Technology';
export const UserContext = createContext();
function App() {
  const [selected,setSelected] = useState("Home");
  const user ={selected,setSelected};
  return (
    <UserContext.Provider value={user}>
    <>
     <Routes>
       <Route path="/" element={<Home/>}>  </Route>
       <Route path="/destination" element={<Destination/>}>  </Route>
       <Route path="/crew" element={<Crew/>}>  </Route>
       <Route path="/technology" element={<Technology/>}>  </Route>
     </Routes>
    </>
    </UserContext.Provider>
  );
}

export default App;

