import React from 'react'
import './TableModalBody.scss'

const TableModalBody = ({ user }) => {
    return (
        <div className="modal_body">
            <div className="location">
                <p className="user_body_info">
                    <strong className="user_info_title">Country: </strong>
                    {user.country}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">City: </strong>
                    {user.city}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">Street Name: </strong>
                    {user.streetName}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">Street Number: </strong>
                    {user.streetNumber}
                </p>
            </div>
            <div className="contact">
                <p className="user_body_info">
                    <strong className="user_info_title">Email: </strong>
                    {user.email}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">Phone Number: </strong>
                    {user.phoneNumber}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">CellPhone: </strong>
                    {user.cellphone}
                </p>
                <p className="user_body_info">
                    <strong className="user_info_title">Nationality: </strong>
                    {user.nationality}
                </p>
            </div>
        </div>
    )
}

export default TableModalBody
