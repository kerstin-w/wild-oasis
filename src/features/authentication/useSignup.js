import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupApi } from '../../services/apiAuth';

/**
 * The useSignup function handles user signup functionality, including making a signup API call and displaying a success message upon successful account creation.
 * @returns The `useSignup` function is returning an object with two properties:
 * 1. `signup`: This is a function that will trigger the signup process when called.
 * 2. `isLoading`: This is a boolean value that indicates whether the signup process is currently loading or not.
 */
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        'Account successfully created! Please verify the new account from the users email address'
      );
    },
  });

  return { signup, isLoading };
}
