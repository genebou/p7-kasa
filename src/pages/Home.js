import Header from '../components/Header.js';
// import Banner from '../Components/Banner.js';
import Footer from '../components/Footer.js';
import AppartList from '../components/AppartList.js';

// import "../Styles/Home.css"


function Home() {
    return (
        <div>     
        	<Header/>
            <br />
            ... Banner ici ...        
            <br />
            <AppartList />
            <Footer/>                  
        </div>
    )
} 

export default Home;
