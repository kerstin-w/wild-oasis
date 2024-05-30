import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';

/**
 * The `useBookings` function uses a query to fetch bookings data and returns loading status, error, and bookings data.
 * @returns The `useBookings` function is returning an object with three properties: `isLoading`, `error`, and `bookings`. These properties are obtained from the `useQuery` hook and are related to fetching and managing booking data.
 */
export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return { isLoading, error, bookings };
}
