import { Link } from "react-router-dom";
// import "../Css/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Back to the Gates</Link>
        </li>

        <li>
          <Link to="/wines">View All Wines</Link>
        </li>

        <li>
          <Link to="/wines/new">Add New Wines</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
