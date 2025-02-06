import styles from '../styles/ButtonAddTask.module.css';

interface ButtonAddTaskProps {
  newAddTask: () => void;
}

const ButtonAddTask: React.FC<ButtonAddTaskProps> = ({ newAddTask }) => {
  return (
    <button type="button" onClick={newAddTask} className={styles.buttonAddTask}>
      Add
    </button>
  );
};

export default ButtonAddTask;