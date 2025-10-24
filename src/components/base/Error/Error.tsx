import React from 'react';
import styles from './Error.module.scss';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({ 
  message = 'Something went wrong!', 
  onRetry 
}) => {
  return (
    <div className={styles.error}>
      <div className={styles.icon}>⚠️</div>
      <h3 className={styles.title}>Oops!</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};
