import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

 

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return(

    <div class="main" >
      <h2> Contact List</h2>
      <h2> Contact List

      <Link to="/add">
        <button style={{float:"right"}} className="ui button blue right" >AddContact</button>
        
      </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contact"
           className="prompt"/>
           <i className="search icon"></i>
        </div>

      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>

  );
   
};

export default ContactList;