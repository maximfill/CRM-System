import styles from '../styles/TaskComponent.module.css';
import TaskItem  from './TaskItem';
import {Task} from '../../utils/api';

interface TaskComponentProps {
  listTask: Task [];
  addEditTask: (task: string, id: number, isDone: boolean) => Promise<void>;
  deleteTask: (id: number) => void;
  updateStatus: (task: string, id: number, isDone: boolean) => Promise<void>;
  currentTasks: Task[];
}


const TaskComponent: React.FC<TaskComponentProps> = ({ addEditTask, deleteTask, updateStatus, currentTasks}) => {


  return (
    <div className={styles.listTask}>
      {currentTasks.map((task) => (
      < TaskItem key={task.id} task={task} addEditTask={addEditTask} deleteTask={deleteTask} updateStatus={updateStatus} />
      ))}
    </div>
  );
};

export default TaskComponent;