import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { clearUser } from '../../redux/actions/user.actions/clearUserAction'
import { useDispatch } from 'react-redux'
import './TableModal.scss'
import LoaderSpinner from '../loader/LoaderSpinner'
import TableModalHeader from './modal.header/TableModalHeader'
import TableModalBody from './modal.body/TableModalBody'
import TableModalFooter from './modal.footer/TableModalFooter'

const TableModal = ({ modalIsOpen, setModalIsOpen }) => {
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const { userLoading, userError, user } = userDetails

    const closeModal = () =>{
        setModalIsOpen(false)
        dispatch(clearUser())
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            shouldCloseOnEsc={true}
            onRequestClose={closeModal}
        >
            {userLoading ? 
            <LoaderSpinner />
            : userError ? userError.message 
            : 
            <>
            {user.map((user, index) => {
                return(
                    <div className="modal_inner" key={index}>
                        <TableModalHeader user={user} />
                        <TableModalBody user={user} />
                    </div>
                    
                )
            })}
            
            </>
            }
            <TableModalFooter closeModal={closeModal} />
        </Modal>
    )
}

export default TableModal
