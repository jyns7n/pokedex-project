import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';
import { pokemonDetailServices, pokemonListServices } from '@/services';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other['official-artwork'].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className='w-[90%] m-[auto] max-w-[1100px]'>
      <div className='flex justify-center'>
        <img
          src='/src/assets/site-logo.png'
          alt='logo'
          className='max-h-[80px] mt-[20px]'
        />
      </div>

      <div className='w-[90%] max-w-[600px] m-[auto] mt-[50px]'>
        <Link
          to={'/'}
          className='bg-gray-600 px-[16px] py-[10px] rounded-[20px] font-semibold text-white'
        >
          Back
        </Link>
        {pokemon.data && (
          <div className='rounded-[20px] overflow-hidden dark:bg-gray-800 dark:border-gray-700 p-[16px] my-[40px] flex bg-slate-600'>
            <div className='bg-center aspect-square w-full bg-cover rounded-[20px] relative'>
              <img
                className='absolute h-[auto] max-h-[400px] w-full aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'
                src='/src/assets/pokemon_bg.png'
                alt=''
              />
              <img
                className='absolute rounded-t-lg h-[50%] sm:h-[250px] p-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'
                src={pokemon.data.image}
                alt=''
              />
            </div>
            <div className='pt-5 bg-[#253641] rounded-[20px] p-[16px] my-[20px] w-full ml-5'>
              <div className='flex justify-between'>
                <h5 className='capitalize mb-2 text-2xl font-bold tracking-tight text-white'>
                  {pokemon.data.name}
                </h5>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                  #{pokemon.data.id}
                </h5>
              </div>
              <div className='grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
                <div>
                  <div className='flex gap-x-[10px]'>
                    <div className='text-[#4CAFEB] font-semibold'>Height</div>
                    <div className='text-white'>
                      {(pokemon.data.height / 10).toFixed(2)} m.
                    </div>
                  </div>
                  <div className='flex gap-x-[10px]'>
                    <div className='text-[#4CAFEB] font-semibold'>Weight</div>
                    <div className='text-white'>
                      {(pokemon.data.weight / 10).toFixed(2)} kg.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-2 justify-end mt-[16px]'>
                  {pokemon.data.types.map((item, index) => {
                    return (
                      <span
                        className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[16px] capitalize`}
                        key={`poke-detail-${index}`}
                      >
                        {item.type.name}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <h5 className='text-white font-semibold'>Abilities</h5>
                  <div className='grid grid-cols-1 gap-[10px] mt-[16px]'>
                    {pokemon.data.abilities.map((item, index) => {
                      return (
                        <div
                          className={`bg-[#4CAFEB] px-[14px] py-1 rounded-[16px]`}
                          key={`poke-ability${index}`}
                        >
                          {item.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='mt-[14px]'>
                  <h5 className='text-white font-semibold'>Stats</h5>
                  <div className='grid grid-cols-1 gap-[10px] mt-[16px]'>
                    {pokemon.data.stats.map((item, index) => {
                      return (
                        <div
                          className='flex gap-x-[10px] justify-between'
                          key={`poke-stat${index}`}
                        >
                          <div className='text-[#4CAFEB] font-semibold capitalize'>
                            {item.stat.name}
                          </div>
                          <div className='text-white'>{item.base_stat}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
