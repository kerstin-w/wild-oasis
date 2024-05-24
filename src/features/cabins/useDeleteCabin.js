import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

/**
 * The `useDeleteCabin` function is a custom hook in that handles deleting a cabin entity and provides loading state and mutation function.
 * @returns The `useDeleteCabin` function returns an object with two properties:
 * 1. `isDeleting`: A boolean value indicating whether the deletion operation is currently in progress.
 * 2. `deleteCabin`: A function that can be called to initiate the deletion of a cabin.
 */
export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
