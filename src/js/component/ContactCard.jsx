import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import profilePic from "../../img/rigo-baby.jpg"

const ContactCard = (props) => {

    const { store, actions } = useContext(Context);

    const deleteContact = () => {
        actions.deleteContact(props.contact.id);
    }

    return (
        <div className="container d-flex border p-2">
            <img src={profilePic} className="img-fluid" />
            <div className="ms-3 align-self-center">
                <h4 className="text mb-3">{props.contact.name}</h4>
                <div className="d-flex">
                    <i className="fa-solid fa-location-dot me-2"></i>
                    <p className="align-self-center"><b>{props.contact.address}</b></p>
                </div>
                <div className="d-flex">
                    <i className="fa-solid fa-phone me-2"></i>
                    <p className="align-self-center">{props.contact.phone}</p>
                </div>
                <div className="d-flex">
                    <i class="fa-solid fa-envelope me-2 mt-1"></i>
                    <p className="align-self-center">{props.contact.email}</p>
                </div>
            </div>
            <div className="d-flex align-items-start ms-auto me-2">
                <Link to={"/editContact/" + props.contact.id} className="btn m-2">
                    <i className="fa-solid fa-pencil"></i>
                </Link>
                <button className="btn m-2" onClick={deleteContact}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    );
}

export default ContactCard;