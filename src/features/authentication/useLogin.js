import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login as loginApi } from '../../services/apiAuth';

/**
 * The useLogin function handles user login functionality, including making a login API call, updating user data in the query client, and redirecting to the dashboard upon successful login.
 * @returns The `useLogin` function returns an object with two properties:
 * 1. `login`: A function that can be called to initiate the login process.
 * 2. `isLoading`: A boolean value indicating whether the login mutation is currently in progress.
 */
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      // Redirect to dashboard
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      // Show error message
      console.log('Error', err);
      toast.error(
        'Provided email or password are incorrect. Please try again.'
      );
    },
  });
  return { login, isLoading };
}
