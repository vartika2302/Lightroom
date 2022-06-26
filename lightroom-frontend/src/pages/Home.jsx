
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RoleLogin from '../components/RoleLogin';


function Home() {
    return(
        <div className='home'>
            <Navbar/>
            <Header/>
            <RoleLogin/>
        </div>
    )
}

export default Home;