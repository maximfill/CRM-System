import styles from '../styles/TaskComponent.module.css';
import TaskItem  from './TaskItem';
import {Task} from '../../utils/api';

interface TaskComponentProps {
  listTask: Task [];
  addEditTask: (task: string, id: number ) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ listTask, addEditTask }) => {

  return (
    <div className={styles.listTask}>
      {listTask.map((task) => (
      < TaskItem key={task.id} task={task} addEditTask={addEditTask} />
      ))}
    </div>
  );
};

export default TaskComponent;