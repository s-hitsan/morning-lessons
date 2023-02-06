import { useEffect, useState } from 'react';

export const useDebounce = (initalValue) => {
  const [debouncedValue, setDebouncedValue] = useState(initalValue);

  const [searchValue, setSearchValue] = useState(initalValue);

  const handleSetSearchValue = (value) => {
    return setSearchValue(typeof value === 'string' ? value : value.target.value);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => setDebouncedValue(searchValue), 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  return { setSearchValue: handleSetSearchValue, searchValue, debouncedValue };
};
