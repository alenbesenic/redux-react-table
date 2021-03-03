import React from 'react'
import { IconContext } from 'react-icons'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'

const TableHeader = ({ headerGroups }) => {
    return (
        <IconContext.Provider value={{ size: ".9em", color: 'white'}}>
            <thead className="table_head">
                {headerGroups.map(headerGroup => (
                    <tr className="table_head_row" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="table_head_column" {...column.getHeaderProps()}>
                                    <span className="react-arrows" {...column.getSortByToggleProps()}>
                                    {column.render('Header')}
                                        {column.canSort ? 
                                            (column.isSortedDesc ? 
                                                <button className="sort_button"><ImArrowDown size="11px" /></button> : 
                                                <button className="sort_button"><ImArrowUp size="11px" /></button>) : ''
                                        }
                                    </span>
                                    {column.canFilter ? column.render('Filter') : null}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
         </IconContext.Provider>
    )
}

export default TableHeader
