import React from 'react';
import styles from './PokemonStats.module.scss';

interface Stat {
  name: string;
  value: number;
}

interface PokemonStatsProps {
  stats: Stat[];
  abilities: string[];
  baseExperience: number;
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ 
  stats, 
  abilities, 
  baseExperience 
}) => {
  const getStatBarWidth = (value: number) => {
    // Normalize stat value to percentage (assuming max stat is 100) :)
    return Math.min((value / 100) * 100, 100);
  };

  return (
    <div className={styles.statsContainer}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Base Stats</h3>
        <div className={styles.statsList}>
          {stats.map((stat) => (
            <div key={stat.name} className={styles.statItem}>
              <div className={styles.statHeader}>
                <span className={styles.statName}>{stat.name}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              <div className={styles.statBar}>
                <div 
                  className={styles.statBarFill}
                  style={{ width: `${getStatBarWidth(stat.value)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Abilities</h3>
        <div className={styles.abilitiesList}>
          {abilities.map((ability, index) => (
            <span key={index} className={styles.ability}>
              {ability}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Base Experience</h3>
        <div className={styles.experience}>
          {baseExperience} XP
        </div>
      </div>
    </div>
  );
};
