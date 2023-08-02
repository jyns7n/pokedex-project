import PokemonCard from '@/components/PokemonCard';
import SearchForm from '@/components/SearchForm';
import { usePokemonListStore } from '@/store/pokemonList';
import ReactLoading from 'react-loading';

const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();

  return (
    <div className='w-[90%] m-[auto] max-w-[1100px]'>
      <SearchForm />
      {fetchPokemon.loading && (
        <div className='h-[600px] flex justify-center items-center'>
          <ReactLoading type='spin' color='#fff' />
        </div>
      )}

      {!fetchPokemon.loading && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[20px]'>
          {pokemon.data?.map((item) => {
            return (
              <PokemonCard
                image={item.image || ''}
                name={item.name}
                id={item.id}
                types={item.types}
                key={`poke-card${item.id}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default HomePage;
