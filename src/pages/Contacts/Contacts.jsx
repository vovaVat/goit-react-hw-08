import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchForm from "../../components/SearchBox/SearchBox";
import style from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={style.contain}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </div>
  );
}
