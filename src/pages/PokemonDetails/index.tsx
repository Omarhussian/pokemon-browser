
import { useParams } from 'react-router-dom';
import { usePokemonDetail } from '../../api/pokemon/usePokemonDetail';
import { PokemonHeader, PokemonImage, PokemonStats, PokemonInfo } from '../../components/PageSpecific/PokemonDetails';
import { Loader, Error } from '../../components/base';
import styles from './PokemonDetails.module.scss';

export const PokemonDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, error } = usePokemonDetail(id!);

  if (isLoading) {
    return <Loader size="lg" message="Loading Pokemon details..." />;
  }

  if (error) {
    return <Error message="Failed to load Pokemon details" />;
  }

  if (!pokemon) {
    return <Error message="Pokemon not found" />;
  }

  const stats = [
    { name: 'HP', value: pokemon.stats?.[0]?.base_stat || 0 },
    { name: 'Attack', value: pokemon.stats?.[1]?.base_stat || 0 },
    { name: 'Defense', value: pokemon.stats?.[2]?.base_stat || 0 },
    { name: 'Sp. Attack', value: pokemon.stats?.[3]?.base_stat || 0 },
    { name: 'Sp. Defense', value: pokemon.stats?.[4]?.base_stat || 0 },
    { name: 'Speed', value: pokemon.stats?.[5]?.base_stat || 0 },
  ];

  const abilities = pokemon.abilities?.map((ability) => 
    ability.is_hidden ? `${ability.ability.name} (Hidden)` : ability.ability.name
  ) || [];
  const primaryType = pokemon.types?.[0]?.type.name || 'unknown';
  const image = pokemon.sprites?.front_default || '';

  return (
    <div className={styles.details}>
      {/* Back button outside the card */}
      <div className={styles.backButton}>
        <a href="/" className={styles.backLink}>
          ← Back to List
        </a>
      </div>

      
      <div className={styles.card}>
        <PokemonHeader 
          name={pokemon.name} 
          id={pokemon.id} 
        />
        
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <PokemonImage 
              image={image}
              name={pokemon.name}
              type={primaryType}
            />
            <PokemonInfo 
              height={pokemon.height}
              weight={pokemon.weight}
            />
          </div>
          
          <div className={styles.rightSection}>
            <PokemonStats 
              stats={stats}
              abilities={abilities}
              baseExperience={pokemon.base_experience}
            />
          </div>
        </div>
      </div>
    </div>
  );
};