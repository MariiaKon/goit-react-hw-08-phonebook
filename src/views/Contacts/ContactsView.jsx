import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactReducer';
import { ContactForm } from 'components/Forms/ContactForm';
import { Filter } from 'components/Forms/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  PrimaryTitle,
  SecondaryTitle,
  Container,
} from 'views/commonCss.styled';

export default function ContactsView() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.filter.toLowerCase());
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {filter === '' ? (
        <ContactList contacts={data} />
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </Container>
  );
}
