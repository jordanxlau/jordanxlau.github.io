import { Link, useLocation } from "react-router-dom";

function Navbar({lang}) {

    // Get path (in order to bold the selected path)
    const location = useLocation();
    const path = location.pathname;

    if (path == '/'+lang+'/tutoring'){
        return (
            <nav class = "navbar navbar-expand-lg pt-3 pl-3 bg-body-tertiary">
                <p class="nav-link px-3"><Link to={"/"+lang}>Home</Link></p>
                <p id = "dropdown" class="nav-link px-3"><Link to={"/"+lang+"/tutoring"}><b>Tutoring</b></Link></p>
                <p class="nav-link px-3"><Link to={"/"+lang+"/personalprojects"}>Personal Projects</Link></p>
            </nav>
        );
    }

    else if (path == '/'+lang+'/personalprojects'){
        return (
            <nav class = "navbar navbar-expand-lg pt-3 pl-3 bg-body-tertiary">
                <p class="nav-link px-3"><Link to={"/"+lang}>Home</Link></p>
                <p id = "dropdown" class="nav-link px-3"><Link to={"/"+lang+"/tutoring"}>Tutoring</Link></p>
                <p class="nav-link px-3"><Link to={"/"+lang+"/personalprojects"}><b>Personal Projects</b></Link></p>
            </nav>
        );
    }

    else {
        return (
            <nav class = "navbar navbar-expand-lg pt-3 pl-3 bg-body-tertiary">
                <p class="nav-link px-3"><Link to={"/"+lang}><b>Home</b></Link></p>
                <p id = "dropdown" class="nav-link px-3"><Link to={"/"+lang+"/tutoring"}>Tutoring</Link></p>
                <p class="nav-link px-3"><Link to={"/"+lang+"/personalprojects"}>Personal Projects</Link></p>
            </nav>
        );
    }
}

export default Navbar;