import styles from '../src/styles/App.module.css';
import Header from './components/Header';
import StatusesTab from './components/StatusesTab';
import TaskComponent from './components/TaskComponent';
import {useState, useEffect } from 'react';
import { Task } from '../utils/api';
import { submitData } from '../utils/api';
import { editedData } from '../utils/api';
import { requestDeleteTask } from '../utils/api';

const App: React.FC = () => {
  const [listTask, setListTask] = useState<Task[]>([]);
  const [currentTasks, setCurrentTasks] = useState<Task[]>([]);

  useEffect(() => {
    setCurrentTasks(listTask);
  }, [listTask]);



  const updateStatus = async (task: string, id: number, isDone: boolean) => {
    try {
      const arrayUpdateStatus = await editedData(task, id, isDone);
      setListTask((prevTask) => 
        prevTask.map((task) => (task.id === id ? arrayUpdateStatus : task))
      );
      console.log( listTask[0],888)
      const aaa = listTask.filter(task => task.isDone === true)
      console.log(aaa, 999)
      } catch(error) {
      console.error('Ошибка при обновлении статуса:', error);
    }
  };

  const addEditTask = async (task: string, id: number, isDone: boolean) => {
    try {
      const arrayEdited: Task = await editedData(task, id, isDone);
      setListTask((prevTask) => 
        prevTask.map((task) => (task.id === id ? arrayEdited : task))
      );
    } catch (error) {
      console.error('Ошибка при редактировании задачи:', error);
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


  const filterTasks = (filterStatus:string) => {
    switch(filterStatus) {
      case 'all':
        setCurrentTasks(listTask);
        break;
      case 'inProgress':
        setCurrentTasks(listTask.filter(task => task.isDone === false));
        break;
      case 'completed':
        setCurrentTasks(listTask.filter(task => task.isDone === true));
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Header addTask={addTask} />
      <StatusesTab listTask={listTask} filterTasks={filterTasks} />
      <main className={styles.main}>
        <TaskComponent listTask={listTask} addEditTask={addEditTask} deleteTask={deleteTask} updateStatus={updateStatus} currentTasks={currentTasks}/>
      </main>
    </div>
  );
};

export default App;