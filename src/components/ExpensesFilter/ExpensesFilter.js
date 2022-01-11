import { useTranslation } from 'react-i18next';
const ExpensesFilter = (props) => {
  const { t } = useTranslation();
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>{t('filter.title')}</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
