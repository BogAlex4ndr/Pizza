import React from 'react';
import { SearchContext } from '../../App';
import { GrClose } from 'react-icons/gr';

import styles from './Search.module.scss';
import debounce from 'lodash.debounce';

export default function Search() {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  const searchDebounce = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );
  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
    searchDebounce(event.target.value);
  };

  return (
    <div className={styles.search__wrapper}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        placeholder='search...'
      />
      {value && (
        <div className={styles.closeicon} onClick={onClickClear}>
          <GrClose />
        </div>
      )}
    </div>
  );
}
