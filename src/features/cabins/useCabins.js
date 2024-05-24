import { useQuery } from '@tanstack/react-query';

import { getCabins } from '../../services/apiCabins';

/**
 * Custom hook for fetching cabin data.
 * This hook uses the `useQuery` hook from the `@tanstack/react-query` library to fetch cabin data from the server. It returns an object containing isLoading, error, and cabins.
 * @returns {Object} An object containing isLoading, error, and cabins.
 * @property {boolean} isLoading - A boolean indicating whether the cabin data is currently being loaded.
 * @property {Error} error - An error object if there was an error while fetching the cabin data.
 * @property {Array} cabins - An array of cabin objects representing the fetched cabin data.
 */
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}
