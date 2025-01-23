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
        <div className="container border p-2 mb-3">
            <div className="row">
                {/* Imagen */}
                <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                    <img src={profilePic} className="img-fluid rounded-circle" alt="Profile" />
                </div>
                {/* Información */}
                <div className="col-12 col-md-6 ms-3">
                    <h4 className="text mb-3">{props.contact.name}</h4>
                    <div className="d-flex align-items-center mb-2">
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <p className="mb-0">{props.contact.address}</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <i className="fa-solid fa-phone me-2"></i>
                        <p className="mb-0">{props.contact.phone}</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <i className="fa-solid fa-envelope me-2"></i>
                        <p className="mb-0">{props.contact.email}</p>
                    </div>
                </div>
                {/* Botones */}
                <div className="col-md-12 col-3 d-flex justify-content-center justify-content-md-end align-items-start">
                    <Link to={"/editContact/" + props.contact.id} className="btn  m-1">
                        <i className="fa-solid fa-pencil"></i>
                    </Link>
                    <button className="btn m-1" onClick={deleteContact}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;