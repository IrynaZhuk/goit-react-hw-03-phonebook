import styles from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ deleteContact, name, number, id }) => {
  return (
    <li className={styles.contact}>
      {name}: {number}
      <button
        className={styles.btn}
        type="button"
        onClick={() => deleteContact(id)}
        id={id}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
