import { Type } from '@/interface/pokemonDetail';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

const PokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
  return (
    <div className='max-w-[275px] w-full m-[auto] rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] bg-slate-600 my-[20px]'>
      <div className="bg-[url('/assets/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
        <Link
          to={`/detail/${name}`}
          href='#'
          className="bg-[url('/assets/poke-card-bg.png')]"
        >
          <img
            className='rounded-t-lg h-[218px] p-[40px] w-full '
            src={image}
            alt={name}
          />
        </Link>
      </div>
      <div className='pt-5'>
        <div className='flex justify-between'>
          <h5 className='capitalize mb-2 text-2xl font-bold tracking-tight text-white'>
            {name}
          </h5>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
            #{id}
          </h5>
        </div>
        <div className='flex gap-2 justify-end mt-[16px]'>
          {types.map((item, index) => {
            return (
              <span
                className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[16px] capitalize`}
                key={`poke-card${index}`}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
