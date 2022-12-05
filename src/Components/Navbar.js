import {Link} from "react-router-dom"
function Navbar()
{
    return(
        <div>
            <Link to="/">Home</Link><p/>
            <Link to="/about">About</Link><p/>
            <Link to="/contact">Contact</Link><p/>
        </div>
    )
}
export default Navbar