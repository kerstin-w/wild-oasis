import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

/**
 * The `useTodayActivity` function fetches today's activities with a refetch interval of every 5 minutes.
 * @returns The `useTodayActivity` function returns an object with two properties:
 * 1. `activities`: This property contains the data fetched from the `getStaysTodayActivity` query function.
 * 2. `isLoading`: This property indicates whether the data is currently being loaded or not.
 */
export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['today-activity'],
    refetchInterval: 1000 * 60 * 5,
  });
  return { activities, isLoading };
}
