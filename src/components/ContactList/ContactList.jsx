import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import style from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state)
  );

  return (
    <>
      <ul className={style.list}>
        {filteredContacts.map((elem) => {
          return (
            <li key={elem.id} className={style.listElem}>
              <Contact elem={elem} onDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
