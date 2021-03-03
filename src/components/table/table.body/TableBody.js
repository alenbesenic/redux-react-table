import React, { useState } from 'react'
import { getUser } from '../../../redux/actions/user.actions/getUserAction'
import TableModal from '../../modal/TableModal'
import './TableBody.scss'

const TableBody = ({ getTableBodyProps, page, prepareRow, pageIndex, pageSize, dispatch }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const getUserDataForModal = (firstname, lastname) =>{
        dispatch(getUser(pageIndex + 1, pageSize, firstname, lastname ))
        openModal()
    }


    return (
        <tbody className="table_body" {...getTableBodyProps()}>
            {page.map(row => {
                prepareRow(row)
                 return(
                    <tr onClick={() => getUserDataForModal(row.original.firstName, row.original.lastName)} className="table_body_row" {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return(
                                <td className="table_body_cell" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            )
                        })}
                    </tr>
                )
            })}
            <TableModal 
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                setModalIsOpen={setModalIsOpen}
            />       
        </tbody>
    )
}

export default TableBody
