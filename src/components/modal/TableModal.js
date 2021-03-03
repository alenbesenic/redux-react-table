import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { clearUser } from '../../redux/actions/user.actions/clearUserAction'
import { useDispatch } from 'react-redux'
import './TableModal.scss'
import LoaderSpinner from '../loader/LoaderSpinner'

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
                        <div className="modal_header">
                            <div className="image_wrapper">
                                <img className="user_image" src={user.picture} alt="user"/>
                            </div>
                            <div className="main_info">
                                <p className="user_main_info"><strong>Name: </strong>{user.title} {user.firstName} {user.lastName}</p>
                                <p className="user_main_info"><strong>Date of Birth: </strong>{user.dateOfBirth}</p>
                                <p className="user_main_info"><strong>Age: </strong>{user.age}</p>
                                <p className="user_main_info"><strong>Gender: </strong>{user.gender}</p>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="location">
                                <p className="user_body_info"><strong>Country: </strong>{user.country}</p>
                                <p className="user_body_info"><strong>City: </strong>{user.city}</p>
                                <p className="user_body_info"><strong>Street Name: </strong>{user.streetName}</p>
                                <p className="user_body_info"><strong>Street Number: </strong>{user.streetNumber}</p>
                            </div>
                            <div className="contact">
                                <p className="user_body_info"><strong>Email: </strong>{user.email}</p>
                                <p className="user_body_info"><strong>Phone Number: </strong>{user.phoneNumber}</p>
                                <p className="user_body_info"><strong>CellPhone: </strong>{user.cellphone}</p>
                                <p className="user_body_info"><strong>Nationality: </strong>{user.nationality}</p>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
            
            </>
            }
            <div className="modal_footer">
               <button className="footer_button" onClick={closeModal}>Close</button>
            </div>
        </Modal>
    )
}

export default TableModal
