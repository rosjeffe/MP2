import Header from "../Layout/header";
// import Content from "../layout/content";
import Footer from "../Layout/footer";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const KopikoStoreAdmin = () =>{
    const [menuItems, setMenuItems] = useState([]);
    // const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        Address: ''
      });


    return(
      <div>
<Header></Header>
<p>
    Kopiko Admin
</p>

    <div>
      {menuItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <Link to={`/menu/edit/${item.id}`}>Edit</Link>
          {/* Delete button */}
        </div>
      ))}
      <Link to="/menu/add">Add New Item</Link>
    </div>

    <form>
      {/* Form fields */}
      <button type="submit">Save</button>
    </form>

<Footer />
      </div>
      

       
        
    )
};
export default KopikoStoreAdmin;