import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditCabin } from '../../services/apiCabins';

/**
 * The `useCreateCabin` function is a custom hook that uses mutation to create a new cabin, with success and error handling.
 * @returns The `useCreateCabin` function returns an object with two properties:
 * 1. `isCreating`: A boolean value indicating whether the creation of a new cabin is currently in progress.
 * 2. `createCabin`: A function that can be called to initiate the creation of a new cabin.
 */
export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New Cabin created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
}
