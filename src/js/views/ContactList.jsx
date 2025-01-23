import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";
import { useNavigate } from "react-router";
import getState from "../store/flux.js";
import { exclude } from "query-string";

const ContactList = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const goToAddContact = () => {
        navigate('/AddContact');
    }

    return (
        <div className="container mt-4 d-flex flex-column">
            <button onClick={goToAddContact} className="btn btn-success ms-auto me-0 mb-3">Add Contact</button>
            <div className="container">
                <ul>
                    {store.contactList.map((contact, index) => (
                        <li>
                            <ContactCard contact={contact} key={index} />
                        </li>
                    ))}
                </ul>
            </div>
            {/* <ContactCard /> */}
        </div>
    )

}

export default ContactList;