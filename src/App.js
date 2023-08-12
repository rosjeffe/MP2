
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import About from './Pages/About';
import ContactUs from './Pages/ContactUS';
import HomePage from './Pages/Homepage';
import Stores from './Pages/Stores';


function App() {
  return (
    <Routes>
      <Route path ="/" element ={<HomePage></HomePage>}></Route>
      <Route path ="/login" element ={<Login></Login>}></Route>
      <Route path ="/About" element = {<About></About>}></Route>
      <Route path ="/Contact" element = {<ContactUs></ContactUs>}></Route>
      <Route path ="/Stores" element = {<Stores></Stores>}></Route>
    </Routes>
  );
}


export default App;
