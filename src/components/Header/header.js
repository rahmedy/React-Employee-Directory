import React from "react";
import "./header.css"

// jumbotron component with back to top function
const Header = (props) => {
    return (
        <div className="header sticky-top bg-dark text-white">
            <h1>Employee Directory</h1>
            <button onClick={() => props.toTop()} type="button" class=" butt btn btn-outline-light">Back to Top</button>
        </div>
    )
}

export default Header;