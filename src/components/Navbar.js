import react from "react";
import PropTypes from 'prop-types'


export default function Navbar(props){
    let modeSwitch = document.getElementById("modeSwitch");
    const handleMode = () => {
        let modeSwitch = document.getElementById("modeSwitch");
        if(modeSwitch.checked){
            props.toggleMode("light");
        }
        else{
            props.toggleMode("dark");
        }
    }
    const handleRMode = () => {
        if(modeSwitch.checked){
            props.toggleMode("danger");
        }
    }
    const handleBMode = () => {
        if(modeSwitch.checked){
            props.toggleMode("info");
        }
    }
    const handleYMode = () => {
        if(modeSwitch.checked){
            props.toggleMode("warning");
        }
    }
    const handleGMode = () => {
        if(modeSwitch.checked){
            props.toggleMode("success");
        }
    }


    return (
        <>
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} px-4`}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.title}</span>
                <div class="d-flex" id="colorPallets">
                    {/* <span className={`cpalate bg-${props.mode === 'light'?'dark':'light'}`} onClick={handleDLMode}></span> */}
                    <span id="cpbtn1" className="cpalate bg-danger" onClick={handleRMode}></span>
                    <span id="cpbtn2" className="cpalate bg-info" onClick={handleBMode}></span>
                    <span id="cpbtn3" className="cpalate bg-warning" onClick={handleYMode}></span>
                    <span id="cpbtn3" className="cpalate bg-success" onClick={handleGMode}></span>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" id="modeSwitch" onClick={handleMode}/>
                    <label className="form-check-label" htmlFor="modeSwitch">DarkMode</label>
                </div>
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