import css from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    return <ul className="contacts__list">
        {contacts.map(({ name, number, id }) => {
            contacts.length > 0 && (
                <li className="contacts-list__item">
                    <span>{name}</span>
                    <span>{number}</span>
                </li>)
        })}    
    </ul>
};

export default ContactList;