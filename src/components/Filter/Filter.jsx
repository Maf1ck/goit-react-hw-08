import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={value}
        onChange={handleChange}
        className={css.input}
        placeholder="Search contacts..."
      />
    </div>
  );
};
