import styles from '../styles/TaskComponent.module.css';
import iconsEdit from '../../public/iconsEdit.png';
import iconsDelete from '../../public/free-icon-delete-6932392 copy.png';

const TaskComponent = () => {
  return (
    <form className={styles.containerTask}>
        <input className={styles.input}type="radio" id="task-id" value="" name="task" checked />
        <textarea className={styles.textarea} id="story"></textarea>
        <button className={styles.buttonEdit}>
          <img src={iconsEdit} alt="Edit" className={styles.icon} />
        </button>
        <button className={styles.buttonDelete}>
          <img src={iconsDelete} alt="Edit" className={styles.icon} />
        </button>
    </form>
  )
};

export default TaskComponent;
