import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import style from "./Contact.module.css";

export default function Contact({ elem, onDelete }) {
  return (
    <div className={style.contain}>
      <ul className={style.list}>
        <li>
          <FaUser />
          {elem.name}
        </li>
        <li>
          <BsFillTelephoneFill />
          {elem.number}
        </li>
      </ul>
      <button onClick={() => onDelete(elem.id)} className={style.button}>
        Delete
      </button>
    </div>
  );
}
