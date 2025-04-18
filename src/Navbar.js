import { Link } from "react-router-dom";

function Navbar({lang}) {
    return (
        <nav class = "navbar navbar-expand-lg p-3 bg-body-tertiary">
            <a class="nav-link px-3"><Link to={"/"+lang}>Home</Link></a>
            <a id = "dropdown" class="nav-link px-3"><Link to={"/"+lang+"/tutoring"}>Tutoring</Link></a>
            <a class="nav-link px-3"><Link to={"/"+lang+"/personalprojects"}>Personal Projects</Link></a>
        </nav>
    );
}

export default Navbar;