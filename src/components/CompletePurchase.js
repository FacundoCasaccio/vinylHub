import { Link } from 'react-router-dom';
import './styles/CompletePurchase.css'

const CompletePurchase = () => {


    return (
        <Link to={'/cart'} ><button>Complete Purchase</button></Link>
    );
}

export default CompletePurchase;