import React from "react";
import { Contact } from "../../models/contact.class";
import PropTypes from "prop-types";


export default function ContactInfo({ contact }){

    return (
        <div>
            <h1>Name: { contact.name }</h1>
            <h2>Lastname: { contact.lastName }</h2>
            <h2>Email: { contact.email }</h2>
            <h3>Status: { contact.connected ? "Online" : "Offline"} </h3>
        </div>
    )
}


ContactInfo.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}