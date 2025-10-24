import React from 'react';
import { RulerIcon, WeightIcon } from '../../../icons';
import styles from './PokemonInfo.module.scss';

interface PokemonInfoProps {
  height: number;
  weight: number;
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ height, weight }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoItem}>
        <div className={styles.infoIcon}>
          <RulerIcon size={20} color="#666" />
        </div>
        <div className={styles.infoContent}>
          <span className={styles.infoLabel}>Height</span>
          <span className={styles.infoValue}>{height / 10} m</span>
        </div>
      </div>
      
      <div className={styles.infoItem}>
        <div className={styles.infoIcon}>
          <WeightIcon size={20} color="#666" />
        </div>
        <div className={styles.infoContent}>
          <span className={styles.infoLabel}>Weight</span>
          <span className={styles.infoValue}>{weight / 10} kg</span>
        </div>
      </div>
    </div>
  );
};
