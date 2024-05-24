import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateSetting as updateSettingApi } from '../../services/apiSettings';

/**
 * The `useEditCabin` function is a custom hook that handles editing cabin data using mutation and query invalidation.
 * @returns The `useEditCabin` function returns an object with two properties:
 * 1. `isEditing`: A boolean value indicating whether the editing process is currently in progress.
 * 2. `editCabin`: A function that can be called to initiate the editing process for a cabin.
 */
export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully edited');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSetting };
}
