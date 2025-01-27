import styles from '../styles/Header.module.css';
import ButtonAddTask from './ButtonAddTask';
import { useState } from 'react';
import { submitData } from '../../utils/api.js';

interface HeaderProps {
  addTask: (task: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTask }) => {
  const [inputField, setInputField] = useState<string>('');

  const newAddTask = async () => {
    if (inputField.trim()) {
      try {
        await submitData(inputField);
        addTask(inputField);
        setInputField('');
      } catch (error) {
        if (error instanceof Error) {
          console.error('Ошибка при добавлении задачи:', error.message);
        } else {
          console.error('Ошибка при добавлении задачи:', error);
        }
      }
    }
  };

  return (
    <form className={styles.header}>
      <input
        className={styles.textarea}
        placeholder="Task to be done..."
        value={inputField}
        type="text"
        id="task-id"
        name="task"
        onChange={(e) => setInputField(e.target.value)}
      />
      <ButtonAddTask newAddTask={newAddTask} />
    </form>
  );
};

export default Header;