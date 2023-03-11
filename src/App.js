import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Example from './components/Example';
import Stats from './components/Stats/Stats';
import User from './components/User/User'
import Admin from './components/Admin/Admin';
import List from './components/List';
import AboutUs from './components/Gettable';
import Mongo from './components/Mongo';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  if(user) {
    return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Stats' element={<Stats/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/List' element={<List/>}></Route>

        <Route path='/Get' element={<AboutUs/>}></Route>
        <Route path='/Mongo' element={<Mongo/>}></Route>
        <Route path='/Example' element={<Example/>}></Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    );
  }
}

export default App;
