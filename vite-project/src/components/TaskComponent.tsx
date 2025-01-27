import styles from '../styles/TaskComponent.module.css';
import iconsEdit from '../../public/iconsEdit.png';
import iconsDelete from '../../public/free-icon-delete-6932392 copy.png';
import { useState } from'react';

interface TodoList {
  title: string;
  completed: boolean;
  id: number;
}

interface TaskComponentProps {
  listTask: TodoList[];
  changeName: (stateName: string) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ listTask, changeName }) => {
  const [active, setNotActive] = useState<boolean>(false);
  const [stateName, setStateName] = useState<string>('');

  function editNote() {
    setNotActive((edit) => !edit);
    if(active) {
      changeName(stateName);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStateName(event.target.value);
  }

  return (
    <div className={styles.listTask}>
      {listTask.map((task, index) => (
        <form key={index} className={styles.containerTask}>
          <input
            className={styles.input}
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.completed}
            name="task"
            value={task.title}
            onChange={handleChange}
          />
          <span className={styles.span}>{task.title}</span>
          <button className={styles.buttonEdit}>
            <img src={iconsEdit} alt="Edit" className={styles.icon} />
          </button>
          <button className={styles.buttonDelete} onClick={editNote}>
            <img src={iconsDelete} alt="Delete" className={styles.icon} />
          </button>
        </form>
      ))}
    </div>
  );
};

export default TaskComponent;
