import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const AddContact = () => {

    const { actions } = useContext(Context);

    const [contacInfo, setContactInfo] = useState(null);

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }


    return (
        <div className="container">
            <h1 className="text text-center mx-auto">Add a new Contact</h1>
            <form>
                <div className="mb-2">
                    <label className="form-label"><strong>Full Name</strong></label>
                    <input className="form-control" />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Email</strong></label>
                    <input className="form-control" />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Phone</strong></label>
                    <input className="form-control" />
                </div>

                <div className="mb-2">
                    <label className="form-label"><strong>Address</strong></label>
                    <input className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary col-12">Save</button>
                <a href="" onClick={goToHome}>or get back to contacts</a>


            </form>
        </div>
    )
}

export default AddContact;