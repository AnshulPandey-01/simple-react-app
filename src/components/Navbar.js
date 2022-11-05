import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useLocation, NavLink} from "react-router-dom";

export default function Navbar(props) {

    const currentRoute = useLocation().pathname.toLowerCase();

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={currentRoute === "home" || currentRoute === "/" ? "nav-link active" : "nav-link"} to="/home">{props.home}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={currentRoute === "about" ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked={true}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.themeText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    theme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    home: PropTypes.string
}

Navbar.defaultProps = {
    theme: "dark",
    title: "Set title here",
    home: "Home"
}
