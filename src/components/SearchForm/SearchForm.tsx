import { generationList, typesList, sortList } from '@/utils/optionList';
import { useSearchForm } from '@/components/SearchForm';
import { style } from '@/utils/constant';

const searchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm();

  return (
    <form className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-[20px]'>
      <div>
        <label htmlFor='generation' className={`${style.formLabel}`}>
          Generation
        </label>
        <select
          {...fieldGeneration}
          id='generation'
          className={`${style.formStyle}`}
        >
          {generationList.map((item, index) => {
            return (
              <option
                className='capitalize'
                key={`generation-key-${index}`}
                value={index}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor='type' className={`${style.formLabel}`}>
          Type
        </label>
        <select {...fieldType} id='type' className={`${style.formStyle}`}>
          {typesList.map((item, index) => {
            return (
              <option
                className='capitalize'
                key={`type-key-${index}`}
                value={index}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor='sort' className={`${style.formLabel}`}>
          Sort By
        </label>
        <select {...fieldSort} id='sort' className={`${style.formStyle}`}>
          {sortList.map((item, index) => {
            return (
              <option
                className='capitalize'
                key={`sort-key-${index}`}
                value={index}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor='generation' className={`${style.formLabel}`}>
          Search
        </label>
        <input
          {...fieldKeyword}
          id='generation'
          className={`${style.formStyle}`}
        />
      </div>
    </form>
  );
};

export default searchForm;
