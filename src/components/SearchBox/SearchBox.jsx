import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import style from "./SearchBox.module.css";

export default function SearchForm() {
  const id = useId();

  const search = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.contain}>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" value={search} onChange={handleSearchChange} />
    </div>
  );
}
