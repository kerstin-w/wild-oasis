import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

/**
 * The `useUser` function retrieves the current user data and checks if the user is authenticated based on their role.
 * @returns The `useUser` function is returning an object with three properties:
 * 1. `user`: The current user data fetched from the `getCurrentUser` function.
 * 2. `isLoading`: A boolean value indicating whether the user data is still loading.
 * 3. `isAuthenticated`: A boolean value derived from the user data, indicating whether the user's role is 'authenticated'.
 */
export function useUser() {
  const { data: user, isLoading } = useQuery({
    querKey: ['user'],
    queryFn: getCurrentUser,
  });
  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
}
