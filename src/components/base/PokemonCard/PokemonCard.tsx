import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  id: number;
  image: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, id, image }) => {
  return (
    <Link to={`/pokemon/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.id}>#{id.toString().padStart(3, '0')}</p>
      </div>
    </Link>
  );
};
