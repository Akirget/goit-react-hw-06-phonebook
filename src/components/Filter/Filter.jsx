import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const filterId = nanoid();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label htmlFor={filterId} className={s.labelFilter}>
        Filter
      </label>
      <input
        id={filterId}
        type="text"
        name="filter"
        className={s.filterInput}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
