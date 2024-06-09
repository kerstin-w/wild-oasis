import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';

import { getStaysAfterDate } from '../../services/apiBookings';

/**
 * The `useRecentStays` function retrieves stays after a specified date and filters out stays with 'checked-in' or 'checked-out' status.
 * @returns The `useRecentStays` function returns an object with three properties:
 * 1. `isLoading`: A boolean indicating whether the data is currently loading.
 * 2. `stays`: The array of stays fetched from the API based on the query date.
 * 3. `confirmedStays`: A filtered array of stays that have a status of 'checked-in' or 'checked-out'.
 */
export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );

  return { isLoading, stays, confirmedStays, numDays };
}
