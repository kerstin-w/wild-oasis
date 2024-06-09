import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';

import { getBookingsAfterDate } from '../../services/apiBookings';

/**
 * The function `useRecentBookings` retrieves bookings made within a specified number of days ago based on search parameters.
 * @returns The `useRecentBookings` function returns an object with two properties:
 * 1. `isLoading`: A boolean value indicating whether the data is currently being loaded.
 * 2. `bookings`: The data fetched from the `getBookingsAfterDate` function based on the query date calculated using the number of days specified in the search parameters.
 */
export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ['bookings', `last-${numDays}`],
  });

  return { isLoading, bookings };
}
