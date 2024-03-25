import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
