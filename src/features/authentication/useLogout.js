import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logout as logoutApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

/**
 * The useLogout function handles user logout functionality in a React application by calling an API,removing queries, and redirecting to the login page.
 * @returns The `useLogout` function returns an object with two properties:
 * 1. `logout`: A function that triggers the logout process when called.
 * 2. `isLoading`: A boolean value indicating whether the logout process is currently in progress.
 */
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      // Redirect to login page
      navigate('/login', { replace: true });
      toast.success('You have been successfully logged out.');
    },
  });

  return { logout, isLoading };
}
