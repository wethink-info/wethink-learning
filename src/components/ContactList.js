import React from 'react';

const boxStyle = {
    width: '500px'
}
const blue = {
    color : '#54818c'
}
const ContactList = (props) => {
    
    return (
        
        <div className="shadow p-3 mb-5 bg-white rounded" style={boxStyle}>
        <h5 style={blue}>Full Name:</h5> {props.fullName}
        <h5 style={blue}>Last Name:</h5> {props.lastName}
        <h5 style={blue}>E-mail adress:</h5> {props.email}
        <h5 style={blue}>Full Name:</h5> {props.phoneNumber}
        <h5 style={blue}>Message:</h5> {props.message}
        </div>
    )
}
export default ContactList;