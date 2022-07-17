import css from "./ContactList.module.css"
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => {
    const contactsCaunt = contacts.length;
    
    if (contactsCaunt <= 0) {
        return null;
    }
    return (
        <ul className={css.contacts__list}>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.contacts__item}>
                        <span>{name}:</span>
                        <span>{number}</span>
                        <button type="button" onClick={() => deleteContact(id)}>delete</button>
                    </li>
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    deleteContact:  PropTypes.func.isRequired,
};

export default ContactList;