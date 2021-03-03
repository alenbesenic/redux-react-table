import React from 'react'
import './TableModalFooter.scss'

const TableModalFooter = ({ closeModal }) => {
    return (
        <div className="modal_footer">
            <button className="footer_button" onClick={closeModal}>Close</button>
        </div>
    )
}

export default TableModalFooter
