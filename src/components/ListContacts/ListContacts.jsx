import { Button, Contact, ContactsList } from "./ListContacts.styled";

const ListContacts = ({list,deleteName}) => {
    
  return (
    <ContactsList>
      {list.map(contact => (
        <Contact key={contact.id}>
          {contact.name} : {contact.number}
          <Button id={contact.id} onClick={deleteName}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
}
export default ListContacts;