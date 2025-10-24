
import  { useState } from 'react';
import { useInfinitePokemonList } from '../../api/pokemon/useInfinitePokemonList';
import { usePaginatedPokemonList } from '../../api/pokemon/usePaginatedPokemonList';
import { Tabs } from '../../components/base/Tabs/Tabs';
import { Pagination } from '../../components/base/Pagination/Pagination';
import { PokemonCard } from '../../components/base/PokemonCard/PokemonCard';
import { Loader } from '../../components/base/Loader/Loader';
import { Error } from '../../components/base/Error/Error';
import styles from './Home.module.scss';

type ViewMode = 'pagination' | 'infinite';

export const HomePage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('pagination');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const paginationQuery = usePaginatedPokemonList(
    itemsPerPage, 
    (currentPage - 1) * itemsPerPage
  );

  const infiniteQuery = useInfinitePokemonList(itemsPerPage);

  const tabs = [
    { id: 'pagination', label: 'Page Controls' },
    { id: 'infinite', label: 'Infinite Scroll' }
  ];

  const handleTabChange = (tabId: string) => {
    setViewMode(tabId as ViewMode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLoadMore = () => {
    if (infiniteQuery.fetchNextPage) {
      infiniteQuery.fetchNextPage();
    }
  };

  const renderPokemonGrid = (pokemonList: any[]) => {
    return (
      <div className={styles.grid}>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.url.split('/').slice(-2, -1)[0]}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
          />
        ))}
      </div>
    );
  };

  const renderPaginationView = () => {
    if (paginationQuery.isLoading) {
      return <Loader size="md" message="Loading Pokemon..." />;
    }

    if (paginationQuery.error) {
      return (
        <Error 
          message="Failed to load Pokemon" 
          onRetry={() => paginationQuery.refetch()} 
        />
      );
    }

    if (!paginationQuery.data) {
      return <Error message="No Pokemon data available" />;
    }

    const totalPages = Math.ceil(paginationQuery.data.count / itemsPerPage);

    return (
      <>
        {renderPokemonGrid(paginationQuery.data.results)}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          
        />
      </>
    );
  };

  const renderInfiniteView = () => {
    if (infiniteQuery.isLoading && !infiniteQuery.data) {
      return <Loader size="md" message="Loading Pokemon..." />;
    }

    if (infiniteQuery.error) {
      return (
        <Error 
          message="Failed to load Pokemon" 
          onRetry={() => infiniteQuery.refetch()} 
        />
      );
    }

    if (!infiniteQuery.data) {
      return <Error message="No Pokemon data available" />;
    }

    const allPokemon = infiniteQuery.data.pages.flatMap(page => page.results);
    const totalLoaded = allPokemon.length;

    return (
      <>
        {renderPokemonGrid(allPokemon)}
        <div className={styles.infiniteControls}>
          {infiniteQuery.isFetchingNextPage && (
            <Loader size="md" message="Loading more Pokemon..." />
          )}
          {infiniteQuery.hasNextPage && !infiniteQuery.isFetchingNextPage && (
            <button 
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
            >
              Load More Pokemon
            </button>
          )}
          <p className={styles.loadedInfo}>Showing {totalLoaded} Pokemon</p>
        </div>
      </>
    );
  };

  return (
    <div className={`${styles.home} ${styles[viewMode]}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>
         
          Pokmen Browser
        </h1>
        <p className={styles.subtitle}>
          Discover and explore Pokemon with {viewMode === 'pagination' ? 'page controls' : 'infinite scroll'}
        </p>
      </header>

      <Tabs 
        tabs={tabs} 
        activeTab={viewMode} 
        onTabChange={handleTabChange} 
      />

      <main className={styles.main}>
        {viewMode === 'pagination' ? renderPaginationView() : renderInfiniteView()}
      </main>
    </div>
  );
};