
import { useParams } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';

export const PokemonDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.details}>
      <h2>Pokemon Details</h2>
      <p>Pokemon ID: {id}</p>
    </div>
  );
};