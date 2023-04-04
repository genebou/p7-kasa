
import { list } from '../assets/data/list';

import Card from './Card';

// import '../Styles/Card.css';

function AppartList() {
    return (
        <div className='content-cards'>
            {list.map((appart) => (
                <Card key={appart.id} appart={appart}/>            
            ))}
        </div>
    )
}
        
export default AppartList;