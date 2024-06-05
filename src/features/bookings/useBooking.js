import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';

/**
 * The `useBooking` function uses a query to fetch booking data and returns loading status, error, and booking information.
 * @returns The `useBooking` function is returning an object with three properties: `isLoading`, `error`, and `booking`. These properties are obtained from the `useQuery` hook and represent the loading state, any errors encountered, and the booking data fetched from the `getBooking` function, respectively.
 */
export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, error, booking };
}
