
import styles from './Home.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <h2>Welcome to Pokemon Browser</h2>
      <p>Discover and explore your favorite Pokemon!</p>
    </div>
  );
};