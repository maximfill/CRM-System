import styles from '../styles/ContainerStatus.module.css'
const Statuses = () => {
  return (
    <div className={styles.containerStatus}>
      <span className={styles.symbolStatus}>Все(3)</span>
      <span className={styles.symbolStatus}>в работе(3)</span>
      <span className={styles.symbolStatus}>сделано(3)</span>
    </div>
  )
};

export default Statuses;
