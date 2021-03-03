import React, { useState } from 'react'

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    const [search, setSearch] = useState(false)
    return (
        <span>
            {
                !search ?
                    <button className="search_button" onClick={() => setSearch(!search)}>Search</button>
            :
            <>
            <input 
                placeholder="Search..."
                className="filter_input"
                value={filterValue || ''} 
                onChange={e => setFilter(e.target.value)} 
            />
            <button className="search_button" onClick={() => setSearch(!search)}>Cancel</button>
            </>
            }
        </span>
    )
}

export default ColumnFilter