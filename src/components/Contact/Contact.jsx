import { FaPhone } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import css from '../Contact/Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ data }) {
   const dispatch= useDispatch()
    return (
        <div className={css.container} >
            <div>
            <div className={css.item}>
                <IoManSharp />
                <p className={css.data}>{data.name}</p>
            </div>
            <div className={css.item}>
                <FaPhone />
                <p className={css.data}>{data.number}</p>
            </div>
            </div>
            <button className={css.btn} type="button" onClick={()=>dispatch(deleteContact(data.id))}> Delete</button>
        </div>
    )
        
        

}