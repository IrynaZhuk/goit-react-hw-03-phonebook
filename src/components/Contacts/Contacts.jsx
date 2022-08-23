import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(contact => {
          return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Contact
                deleteContact={deleteContact}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                key={contact.id}
              />
            )
          );
        })}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
