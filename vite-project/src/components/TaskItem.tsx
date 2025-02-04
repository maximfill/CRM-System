import iconsEdit from '../../public/iconsEdit.png';
import iconsDelete from '../../public/free-icon-delete-6932392 copy.png';
import styles from '../styles/TaskComponent.module.css';
import { useState } from 'react';
import { Task } from '../../utils/api';

interface TodoItemProps {
  task: Task;
  addEditTask: (task: string, id: number, isDone: boolean) => Promise<void>;
  deleteTask: (id: number) => void;
  updateStatus: (task: string, id: number, isDone: boolean) => Promise<void>;
};

const TaskItem: React.FC<TodoItemProps> = ({ task, addEditTask, deleteTask, updateStatus }) => {
  const [stateName, setStateName] = useState<string>(task.title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [previousState, setPreviousState] = useState<Task|null>(null);
  const [checked, setChecked] = useState<boolean>(false);

  const editNote = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await addEditTask(stateName, task.id, task.isDone);
      setIsEditing(false);
    } catch (err) {
      console.error('Ошибка при редактировании задачи:', err);
    }
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStateName(event.target.value);
  };

  const cancelEditing = () => {
    if(previousState) {
      setStateName(previousState.title);
      setIsEditing(false);
    }
  };

  return (
    <form className={styles.containerTask}>
      <input
        className={styles.input}
        type="checkbox"
        id={`task-${task.id}`}
        checked={checked}
        onChange = {() => {
          const statysCheckend = !checked;
          setChecked(statysCheckend);
          updateStatus(task.title, task.id, statysCheckend)
          }
        }
        name="task"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={stateName}
          onChange={handleChange}
          className={styles.inputEdit}
        />
      ) : (
        <span className={styles.span}>{task.title}</span>
      )}

      <button
        className={styles.buttonEdit}
        type="button"
        onClick={() => { 
          setIsEditing(!isEditing);
          setPreviousState(task);
        }}
      >
        <img src={iconsEdit} alt="Edit" className={styles.icon} />
      </button>

      {isEditing && (
        <>
          <button className={styles.buttonSave} type="button" onClick={editNote}>
            Save
          </button>
          
          <button className={styles.buttonSave} type="button" onClick={cancelEditing}>
            Сancel
          </button>
        </>
      )}

      <button className={styles.buttonDelete} type="button" onClick={() => deleteTask(task.id)}>
        <img src={iconsDelete} alt="Delete" className={styles.icon} />
      </button>
    </form>
  );
};

export default TaskItem;