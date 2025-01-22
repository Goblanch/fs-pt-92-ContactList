import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";
import { useNavigate } from "react-router";
import getState from "../store/flux.js";

const ContactList = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [contacts, getContacts] = useState([]);

    const goToAddContact = () => {
        navigate('/AddContact');
    }

    return (
        <div className="container mt-4 d-flex flex-column">
            <button onClick={goToAddContact} className="btn btn-success ms-auto me-0 mb-3">Add Contact</button>
            <ContactCard />
        </div>
    )

}

export default ContactList;