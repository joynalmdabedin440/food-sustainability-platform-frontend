import { Outlet } from "react-router";
import Navbar from "../components/ui/layout/Navbar";
import Footer from "../components/ui/layout/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                {/* Outlet for nested routes */}
                <Outlet/>
            </div>

            {/* footer */}
            <Footer/>
            
        </div>
    );
};

export default MainLayout;