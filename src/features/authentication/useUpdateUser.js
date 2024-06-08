import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateCurrentUser } from '../../services/apiAuth';

/**
 * The `useUpdateUser` function is a custom hook that handles updating user data with mutation and provides loading state information.
 * @returns An object is being returned with two properties:
 * 1. `updateUser`: A function that can be used to update the current user.
 * 2. `isUpdating`: A boolean value indicating whether the update operation is currently in progress.
 */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('User account successfully updated');
      queryClient.setQueryData(['user'], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
