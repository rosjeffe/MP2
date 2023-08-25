
import './App.css';
import {Routes,Route, Router} from 'react-router-dom'
import About from './Pages/About';
import ContactUs from './Pages/ContactUS';
import HomePage from './Pages/Homepage';
import Stores from './Pages/Stores';
import AdminLogin from './Pages/AdminLogin';
import UserLogin from './Pages/UserLogin';
import Signup from './Pages/Signup';
import KopikoStore from './Pages/KopikoStore'
import KopikoStoreAdmin from './Pages/KopikoStoreAdmin'
import PizzaStoreAdmin from './Pages/PizzaStoreAdmin'
import RootLayout from './Layout/rootLayout';


function App() {
  return (


    <Routes element = {<RootLayout />}>
      <Route path ="/" element ={<HomePage></HomePage>}></Route>
      <Route path ="/About" element = {<About></About>}></Route>
      <Route path ="/Contact" element = {<ContactUs></ContactUs>}></Route>
      <Route path ="/Stores" element = {<Stores></Stores>}></Route>
      <Route path ="/AdminLogin" element = {<AdminLogin></AdminLogin>}></Route>
      <Route path ="/UserLogin" element = {<UserLogin></UserLogin>}></Route>
      <Route path ="/Signup" element = {<Signup></Signup>}></Route>
      <Route path="/KopikoStore/"element = {<KopikoStore></KopikoStore>}></Route>
      <Route path="/PizzaStoreAdmin/:Pizza" element = {<PizzaStoreAdmin></PizzaStoreAdmin>}></Route>
      <Route path="/KopikoStoreAdmin/:Kopiko" element = {<KopikoStoreAdmin></KopikoStoreAdmin>}></Route>
    
      {/* <Route path="/PizzaStoreAdmin/:Angels" element = {<PizzaStoreAdmin></PizzaStoreAdmin>}></Route> */}
    
    {/* <Route element ={< AdminLogin/>}>
  
    <Route path="/PizzaStoreAdmin/:Pizza" element = {<PizzaStoreAdmin></PizzaStoreAdmin>}></Route>
    <Route path="/KopikoStoreAdmin/:Kopiko" element = {<KopikoStoreAdmin></KopikoStoreAdmin>}></Route>
    </Route> */}
    
    </Routes>

   
    
  );
}


export default App;
