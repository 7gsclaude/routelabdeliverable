import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Istonks</div>
            </Link>
            <Link to="/dashboard">
            <div>Stocks</div>
            </Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav