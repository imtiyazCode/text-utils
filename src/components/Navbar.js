import react from "react";
import PropTypes from 'prop-types'


export default function Navbar(props){
    return (
        <>
        <nav className="navbar navbar-dark bg-dark px-4">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.title}</span>
            </div>
        </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: "Set Title Here"
}