import React from 'react';
import styles from './PokemonHeader.module.scss';

interface PokemonHeaderProps {
  name: string;
  id: number;
}

export const PokemonHeader: React.FC<PokemonHeaderProps> = ({ name, id }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
       
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.id}>#{id.toString().padStart(3, '0')}</p>
      </div>
    </div>
  );
};
