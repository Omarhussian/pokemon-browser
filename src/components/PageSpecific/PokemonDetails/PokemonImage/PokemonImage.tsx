import React from 'react';
import styles from './PokemonImage.module.scss';

interface PokemonImageProps {
  image: string;
  name: string;
  type: string;
}

export const PokemonImage: React.FC<PokemonImageProps> = ({ image, name, type }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src={image} 
          alt={name} 
          className={styles.image}
        />
      </div>
      <div className={styles.typeTag}>
        {type}
      </div>
    </div>
  );
};
