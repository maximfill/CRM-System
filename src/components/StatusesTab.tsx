import styles from '../styles/ContainerStatus.module.css';
import {Task} from '../../utils/api';

type TaskFilter = (status: string) => void;

interface TaskStatus {
  listTask: Task [];
  filterTasks: TaskFilter;
}


const StatusesTab: React.FC<TaskStatus> = ({filterTasks}) => {


  return (
    <div className={styles.containerStatus}>
      <button className={styles.symbolStatus} onClick ={() => {filterTasks('all')}}>Все(3)</button>
      <button className={styles.symbolStatus} onClick ={() => {filterTasks('inProgress')}}>в работе(3)</button>
      <button className={styles.symbolStatus} onClick ={() => {filterTasks('completed')}}>сделано(3)</button>
    </div>
  )
};

export default StatusesTab;
