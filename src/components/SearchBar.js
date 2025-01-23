import React from "react";

export default function SearchBar({onSearch}){
    const [searchBar, setSearchbar]=React.useState("")

    function handleSearch(event){
        const e =event.target.value
        setSearchbar(e)
        onSearch(e)

    }
    return(
        <div>
            <h2>Search for Tasks</h2>
            <input 
             type="text"
             name="search-bar"
             value={searchBar}
             placeholder="search task "
             onChange={handleSearch}
            />
        </div>
    )
}