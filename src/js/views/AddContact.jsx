import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

const AddContact = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const saveContact = (e) => {
        e.preventDefault();
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("You need to fill all fields");
            return null;
        }

        const contact = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };

        if (!id) {
            actions.createContact(contact);
        } else {
            actions.editContact(id, contact);
        }

        goToHome();

    }

    useEffect(() => {

        if (id) {
            const contactToShow = store.contactList.find(contact => contact.id == id);
            console.log(contactToShow);
            setName(contactToShow.name);
            setAddress(contactToShow.address);
            setPhone(contactToShow.phone);
            setEmail(contactToShow.email);
        }

    }, [id])

    return (
        <div className="container">
            <h1 className="text text-center mx-auto">{!id ? "Add New Contact" : `Edit Contact: ${name}`}</h1>
            <form onSubmit={saveContact}>
                <div className="mb-2">
                    <label className="form-label"><strong>Full Name</strong></label>
                    <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Email</strong></label>
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Phone</strong></label>
                    <input className="form-control" type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Address</strong></label>
                    <input className="form-control" type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>

                <button type="submit" className="btn btn-primary col-12">Save</button>
                <a href="" onClick={goToHome}>or get back to contacts</a>


            </form>
        </div>
    )
}

export default AddContact;