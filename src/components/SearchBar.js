import {useState} from "react";
import "../styles/search.scss"


const SearchBar = ({updateQuery , apiStatus}) =>{

    const[value , setValue] = useState("");
    const disable = (apiStatus === 'pending') || (apiStatus === 'init')

    const search = () => {
          updateQuery(value);
    }

    return (
        <header className="search-container">
            <input 
            placeholder="Search Images... "
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={search} disabled={disable}>Search</button>
        </header>
    )
}


export default SearchBar;