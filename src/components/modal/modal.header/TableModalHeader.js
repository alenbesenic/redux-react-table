import React from 'react'
import './TableModalHeader.scss'

const TableModalHeader = ({ user }) => {
    return (
        <div className="modal_header">
            <div className="image_wrapper">
                <img className="user_image" src={user.picture} alt="user"/>
            </div>
            <div className="main_info">
                <p className="user_main_info">
                    <strong className="user_info_title">Name: </strong>
                    {user.title} {user.firstName} {user.lastName}
                </p>
                <p className="user_main_info">
                    <strong className="user_info_title">Date of Birth: </strong>
                    {user.dateOfBirth}
                </p>
                <p className="user_main_info">
                    <strong className="user_info_title">Age: </strong>
                    {user.age}
                </p>
                <p className="user_main_info">
                    <strong className="user_info_title">Gender: </strong>
                    {user.gender}
                </p>
            </div>
        </div>
    )
}

export default TableModalHeader
