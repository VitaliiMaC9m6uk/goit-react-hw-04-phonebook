import { Component } from "react";
import { Button, Contact, ContactsList } from "./ListContacts.styled";

class ListContacts extends Component {   

  componentDidUpdate(prevProps, prevState) {  
    if (prevProps.list !== this.props.list) {
      localStorage.setItem('contacts',JSON.stringify(this.props.list))
    }
}
  
render(){  
    return (
      <ContactsList>
        {this.props.list.map(contact => (          
            <Contact key = {contact.id}>
              {contact.name} : {contact.number}
            <Button
              id={contact.id}
              onClick={this.props.deleteName}
            >Delete</Button>
            </Contact>
          
        ))}
      </ContactsList>
    );
  };
}
export default ListContacts;