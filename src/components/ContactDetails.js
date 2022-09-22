import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
    const { name, phone } = props.location.state.contact;
    return (
        <div className="main">
            <h2>Contact Details</h2>
            <h2>Contact Details</h2>
            <div className="ui card ">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="phone"> {phone}</div>
                </div>
            </div>
            <div className="centre-div">
                <Link to="/">
                <button className="ui button blue centre">Back to Contact List</button>
                </Link>
            </div>
        </div>

    );
};

export default ContactDetails;