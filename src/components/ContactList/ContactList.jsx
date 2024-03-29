import { useSelector } from "react-redux"
import Contact from "../Contact/Contact.jsx"
import css from "../ContactList/ContactList.module.css"
export default function ContactList({  onDelete }) {
    const value = useSelector((state) => state.contacts.items)
    console.log(value);
    return (
     value &&  <ul className={css.list}>
            {
                value.map((item) =>
                    <li key={item.id}>
                        <Contact data={item} onDelete={onDelete} />
                </li>)
            }
        </ul>
    )
}