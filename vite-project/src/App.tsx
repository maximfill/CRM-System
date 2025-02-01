import styles from '../src/styles/App.module.css';
import Header from './components/Header';
import Statuses from './components/Statuses';
import TaskComponent from './components/TaskComponent';
import {useState } from 'react';
import { Task } from '../utils/api';
import { submitData } from '../utils/api';
import { editedData } from '../utils/api';
import { requestDeleteTask } from '../utils/api';

const App: React.FC = () => {
  const [listTask, setListTask] = useState<Task[]>([]);
  // const [previousState, setPreviousState] = useState<Task|null>(null);

  const addEditTask = async (task: string, id: number) => {
    try {
      const arrayEdited: Task = await editedData(task, id);
      setListTask((prevTask) => 
        prevTask.map((task) => (task.id === id ? arrayEdited : task))
      );
    } catch (err) {
      console.error('Ошибка при редактировании задачи:', err);
    }
  };

  const addTask = async (task: string) => {
    if (task.trim()) {
      try {
        const arrayNote: Task = await submitData(task);
        setListTask([...listTask, arrayNote]);
      } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
      }
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await requestDeleteTask(taskId);
      setListTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
    } catch(error) {
      console.log('Ошибка при удалении', error);
    }
  };


  return (
    <div className={styles.container}>
      <Header addTask={addTask} />
      <Statuses />
      <main className={styles.main}>
        <TaskComponent listTask={listTask} addEditTask={addEditTask} deleteTask={deleteTask}/>
      </main>
    </div>
  );
};

export default App;