import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><strong>Let's book it</strong></span>
        </Link>
        
        {user ? (
          <div className="usernameContainer">
            <span className="username">Log as <strong>{user.username}</strong></span>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Navbar