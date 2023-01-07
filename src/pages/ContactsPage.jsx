import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => (
  <div>
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
    </Section>

    <Section>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  </div>
);

export default ContactsPage;
