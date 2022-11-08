import React from 'react';
import { SearchContext } from '../../App';
import { GrClose } from 'react-icons/gr';

import styles from './Search.module.scss';

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const onClickClear = () => {
    setSearchValue('');
    document.querySelector('input').focus();
  };
  React.useEffect(() => console.log(document.querySelector('input')));

  return (
    <div className={styles.search__wrapper}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder='search...'
      />
      {searchValue && (
        <div className={styles.closeicon} onClick={onClickClear}>
          <GrClose />
        </div>
      )}
    </div>
  );
}
