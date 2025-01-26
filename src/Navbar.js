import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class = "navbar navbar-expand-lg p-3 bg-body-tertiary">
            <a class="nav-link px-3" href="index.html"><Link to={"/"}>Home</Link></a>
            <a id = "dropdown" class="nav-link px-3" href="tutoring.html"><Link to={"/tutoring"}>Tutoring</Link></a>
            <a class="nav-link px-3" href="personalprojects.html"><Link to={"/personalprojects"}>Personal Projects</Link></a>
        </nav>
    );
}

export default Navbar;