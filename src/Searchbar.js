import React from "react";

const Searchbar = ({field, search}) => {
    return (
        <div>
            <input 
            type = "search" 
            placeholder = "Search for a robot." 
            className = "w5 tc pa3 br3 b--none bg-light-yellow"
            onChange = {search}
            />
        </div>
    )
}

export default Searchbar;