import styles from '../styles/Header.module.css';
import ButtonAddTask from './ButtonAddTask';

const Header = () => {

  return(
    <div className={styles.header}>
      <h3>Task to be done...</h3>
      < ButtonAddTask />
    </div>
  )
};
export default Header;