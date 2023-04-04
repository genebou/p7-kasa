// import { Link } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// import '../Styles/NotFound.css'

function NotFound() {
    return (
        <div className="app-container">     
            <Header/> 
            <main>
        	   <h1 className='notfound-txt'>404</h1>
                <p className="notfound">Oups ! La page que vous demandez n'existe pas.</p>
                
            </main>
            <Footer/>
        </div>
    )
}

export default NotFound;