import React, {useCallback, useContext, useRef, useState} from 'react';
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import {SearchContext} from "../../App";

const Search = () => {
  const [value, setValue] = useState('');
  const {searchValue, setSearchValue} = useContext(SearchContext);
  const inputRef = useRef('');

  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  }
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/>
        <path
          d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z"/>
      </svg>
      <input type="text"
             placeholder="Поиск пиццы..."
             className={styles.input}
             ref={inputRef}
             value={value}
             onChange={onChangeInput}
      />
      {value &&
        <svg onClick={onClickClear} className={styles.close}
             viewBox="0 0 20 19.84"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
        </svg>}
    </div>
  );
};

export default Search;
