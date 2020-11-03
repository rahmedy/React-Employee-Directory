import React from 'react';
import './search.css';

function Search(props) {

    return (
        // <div className="row">
            <form>
                <input type="text" className="form-control" value={props.search} onChange={props.handleChange} placeholder="search"/>
            </form>
        /* </div> */
    )
    
}

export default Search