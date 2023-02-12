import React from "react";
import { Contact } from "../../models/contact.class";
import ContactInfo from "../pure/ContactInfo";


export default function ContactList(){

    const defaultContact = new Contact("Edgard", "Pazos", "allan.pazos@uabc.edu.mx", true)

    return(
        <div>
            <article>
                Your Contacts:
            </article>
            <ContactInfo contact={defaultContact}></ContactInfo>
        </div>
    )
}