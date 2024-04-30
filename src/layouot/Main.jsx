
import { Outlet } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import Footer from '../shared/Footer';



const Main = () => {
    return (
        <div>
         <MainMenu/>  
         <Outlet/>
         <Footer/>
        </div>
    
    );
};

export default Main;