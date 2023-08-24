
import './App.css';
import {Routes,Route} from 'react-router-dom'
import About from './Pages/About';
import ContactUs from './Pages/ContactUS';
import HomePage from './Pages/Homepage';
import Stores from './Pages/Stores';
import AdminLogin from './Pages/AdminLogin';
import UserLogin from './Pages/UserLogin';
import Signup from './Pages/Signup';
import KopikoStore from './Pages/KopikoStore';


function App() {
  return (
    <Routes>
      <Route path ="/" element ={<HomePage></HomePage>}></Route>
      <Route path ="/About" element = {<About></About>}></Route>
      <Route path ="/Contact" element = {<ContactUs></ContactUs>}></Route>
      <Route path ="/Stores" element = {<Stores></Stores>}></Route>
      <Route path ="/AdminLogin" element = {<AdminLogin></AdminLogin>}></Route>
      <Route path ="/UserLogin" element = {<UserLogin></UserLogin>}></Route>
      <Route path ="/Signup" element = {<Signup></Signup>}></Route>
      <Route path="/KopikoStore/:Pizza" element = {<KopikoStore></KopikoStore>}></Route>
    </Routes>
    
  );
}


export default App;
