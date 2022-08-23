import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filterChange }) => (
  <label className={styles.label} htmlFor="filter">
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      name="filter"
      onChange={filterChange}
    />
  </label>
);

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
