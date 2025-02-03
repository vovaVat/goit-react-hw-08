import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchForm from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import style from "./Contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={style.contain}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </div>
  );
}
