import React from "react";
import ContactCard from "../component/ContactCard.jsx";
import { useNavigate } from "react-router";

const ContactList = () => {

    const navigate = useNavigate();

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