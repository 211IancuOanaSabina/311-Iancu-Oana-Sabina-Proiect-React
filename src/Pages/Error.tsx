import '../Assets/Styles/Error.css'; 
import { Link } from 'react-router-dom';

function Error() {
    return ( 
       <div id = "fundal">
            <img src={ require("../Assets/Images/cluj.jpg") } id = "fundal" alt="logo" />
            <div id = "bg">
                <h1>404 error</h1>
                <br></br>
                <br></br>
                <h2>You don't have any memories here, please return to main page</h2>
                <h3><Link id="Home" to="/">Back to main page</Link></h3>
            </div>
       </div>
    );
}

export default Error;