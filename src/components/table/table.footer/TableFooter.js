import React from 'react'
import { IconContext } from 'react-icons'
import { FaFastBackward, FaFastForward } from 'react-icons/fa'
import './TableFooter.scss'

const TableFooter = ({ 
    pageIndex,  
    gotoPage, 
    pageSize, 
    setPageSize, 
    canPreviousPage, 
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    number
}) => {
    return (
        <IconContext.Provider value={{ size: "1.2em", color: 'white'}}>
            <div className="table_footer">
                <div className="table_page_info">
                    <div className="page_number_info">
                        Page {' '}
                        <strong>
                            {pageIndex + 1} of {pageCount}
                        </strong> {' '}
                    </div>
                    <div className="page_number_action">
                        Go To Page: {' '}
                        <input 
                            className="go_to_page_input"
                            type='number'
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value - 1) : 0
                                    gotoPage(pageNumber)
                            }}
                        />
                    </div>
                </div>
                <div className="table_page_actions">
                    <select className="table_select" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [
                                {title: "10", value: 10}, 
                                {title: "25", value: 25}, 
                                {title: "50", value: 50}, 
                                {title: "100", value: 100},
                                {title: "All", value: number}].map(pageSize => (
                                <option key={pageSize.title} value={pageSize.value}>
                                    Show {pageSize.title}
                                </option>
                            ))
                        }
                    </select>
                    <div className="table_button_actions">
                        <button 
                            className={"table_button" + (!canPreviousPage ? '_disabled' : '_active')}
                            onClick={() => gotoPage(0)} 
                            disabled={!canPreviousPage}
                        >
                            <FaFastBackward />
                        </button>
                        <button 
                            className={"table_button" + (!canPreviousPage ? '_disabled' : '_active')}
                            onClick={() => previousPage()} 
                            disabled={!canPreviousPage}
                        >
                                Back
                        </button>
                        <button 
                            className={"table_button" + (!canNextPage ? '_disabled' : '_active')} 
                            onClick={() => nextPage()} 
                            disabled={!canNextPage}
                        >
                            Next
                        </button>
                        <button 
                            className={"table_button" + (!canNextPage ? '_disabled' : '_active')}
                            onClick={() => gotoPage(pageCount - 1)} 
                            disabled={!canNextPage}
                        >
                            <FaFastForward />
                        </button>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default TableFooter
