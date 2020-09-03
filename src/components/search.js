import React, { useState } from 'react'

const Search = ({ onSubmit })=>{
    const [searchName, setSearchName] = useState('')
    return (
    <div className="search">
        <input onInput={(evt)=>{setSearchName(evt.target.value)}} placeholder="Search" />
        <button onClick={()=>{onSubmit(searchName)}}>Search</button>
    </div>
    )
}

export default Search