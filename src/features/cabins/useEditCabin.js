import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditCabin } from '../../services/apiCabins';

/**
 * The `useEditCabin` function is a custom hook that handles editing cabin data using mutation and query invalidation.
 * @returns The `useEditCabin` function returns an object with two properties:
 * 1. `isEditing`: A boolean value indicating whether the editing process is currently in progress.
 * 2. `editCabin`: A function that can be called to initiate the editing process for a cabin.
 */
export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}
