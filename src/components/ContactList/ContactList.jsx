import { useSelector } from "react-redux"
import Contact from "../Contact/Contact.jsx"
import css from "../ContactList/ContactList.module.css"
export default function ContactList() {
    const value = useSelector((state) => state.contacts.items)
    // console.log(value);
    const searchName = useSelector((state) => state.filters.name)
     const searchUser = value.filter((contacts)=>contacts.name.toLowerCase().includes(searchName.toLowerCase()))
    return (
     value &&  <ul className={css.list}>
            {
                searchUser.map((item) =>
                    <li key={item.id}>
                        <Contact data={item}  />
                </li>)
            }
        </ul>
    )
}