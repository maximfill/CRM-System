import styles from '../src/styles/App.module.css';
import Header from './components/Header';
import Statuses from './components/Statuses';
import TaskComponent from './components/TaskComponent';

function App() {

  return (
      <div className={styles.container}>
        <Header />
        <Statuses />
        <main className={styles.main}>
          <TaskComponent />
        </main>
      </div>
  )
}

export default App;


    {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}