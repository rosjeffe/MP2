import Header from "./header"
import Content from "./content";
import Footer from "./footer";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return(
        <div className="rootMain">
            <Header />
           
        </div>
    )
}

export default RootLayout;