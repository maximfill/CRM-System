import styles from '../src/styles/App.module.css';
import Header from './components/Header';
import Statuses from './components/Statuses';
import TaskComponent from './components/TaskComponent';
import {useState} from 'react';
import { TodoResponse } from '../utils/api';
import { submitData } from '../utils/api';

const App: React.FC = () => {
  const [listTask, setListTask] = useState<TodoResponse[]>([]);

  function changeName(stateName: string) {
    setListTask((prevListTask) => [...prevListTask, stateName]);
  };

  const addTask = async (task: string) => {
    if (task.trim()) {
      try {
        const arrayNote: TodoResponse = await submitData(task);
        setListTask([...listTask, arrayNote]);
      } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Header addTask={addTask} />
      <Statuses />
      <main className={styles.main}>
        <TaskComponent changeName={changeName} listTask={listTask} />
      </main>
    </div>
  );
};

export default App;