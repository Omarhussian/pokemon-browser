import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'md', 
  message = 'Loading...' 
}) => {
  return (
    <div className={`${styles.loader} ${styles[size]}`}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
