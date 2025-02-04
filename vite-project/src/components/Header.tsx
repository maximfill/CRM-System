import styles from '../styles/Header.module.css';
import ButtonAddTask from './ButtonAddTask';
import { useState } from 'react';

interface HeaderProps {
  addTask: (task: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTask }) => {
  const [inputField, setInputField] = useState<string>('');

  const newAddTask = async () => {
    if (inputField.trim()) {
      try {
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
        className={styles.input}
        placeholder="Task to be done..."
        value={inputField}
        type="text"
        id="task-id"
        name="task"
        minLength={2}
        maxLength={64}
        onChange={(e) => setInputField(e.target.value)}
      /> 
      {inputField.length > 0 && inputField.length < 2 && <div className={styles.error}>Ошибка: минимум 2 символа</div>}
      <ButtonAddTask newAddTask={newAddTask} />
    </form>
  );
};

export default Header;