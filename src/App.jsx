// import { useState } from 'react'
import ContactList from "./components/ContactList/ContactList.jsx"
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import { useState } from "react"

import SearchBox from "./components/SearchBox/SearchBox.jsx"
import css from "../src/app.module.css"
import { useSelector } from "react-redux"

// const Phonebook = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

function App() {
//    const Phonebook =useSelector((state)=>state.contacts.item)
//  const [user, setUser] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts")
//     return savedContacts !== null ? JSON.parse(savedContacts) :
//       Phonebook
//   })
//   useEffect(() => {
//     localStorage.setItem("contacts",JSON.stringify(user))
//   }, [user]);






  const [search, setSearch] = useState('');
  
  // const addUser = (newUser) => {
  //   const newContact={id:nanoid(), ...newUser}
  //   setUser((prevUser) =>{
  //   return[...prevUser,newContact]})
  // }

  // const deleteUser = (userId) => {
  //   setUser((prevUser) => {
  //     return prevUser.filter((user) => user.id !== userId)
  //   })
  // }

  // const searchUser = user.filter((contacts)=>contacts.name.toLowerCase().includes(search.toLowerCase()))
const selectNameFilter =useSelector((state)=>state.filters.name)
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox value={search}  />
      <ContactList Phonebook={selectNameFilter}  />
</div>

  )
}

export default App
