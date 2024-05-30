import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';

/**
 * The `useBookings` function uses a query to fetch bookings data and returns loading status, error, and bookings data.
 * @returns The `useBookings` function is returning an object with three properties: `isLoading`, `error`, and `bookings`. These properties are obtained from the `useQuery` hook and are related to fetching and managing booking data.
 */
export function useBookings() {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, error, bookings };
}
