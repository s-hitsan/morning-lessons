import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useDebounce = (initalValue) => {
  const [searchParams, setSearhParams] = useSearchParams();

  const handleInitilValue = searchParams.get('search') || initalValue;

  const [debouncedValue, setDebouncedValue] = useState(handleInitilValue);

  const [searchValue, setSearchValue] = useState(handleInitilValue);

  const handleSetSearchValue = (value) => {
    const searhValue = typeof value === 'string' ? value : value.target.value;

    setSearhParams({ search: searhValue });

    return setSearchValue(searhValue);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => setDebouncedValue(searchValue), 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  return { setSearchValue: handleSetSearchValue, searchValue, debouncedValue };
};
