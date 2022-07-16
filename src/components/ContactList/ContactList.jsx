import css from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    const contactsCaunt = contacts.length;
    console.log(contacts);
    // return (
    //     {
    //         contactsCaunt > 0 && (
    //             <ul className="contacts__list">
    //                 {contacts.map(({ name, number, id }) => {
    //                     return (
    //                         <li className="contacts-list__item">
    //                             <span>{name}:</span>
    //                             <span>{number}</span>
    //                         </li>
    //                     )
    //                 })};
    //             </ul>
    //         )
    //     }
    // )
};    

export default ContactList;