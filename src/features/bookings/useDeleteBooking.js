import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

/**
 * The `useDeleteBooking` function is a custom hook that handles deleting a booking and updating the UI accordingly.
 * @returns The `useDeleteBooking` function returns an object with two properties:
 * 1. `isDeleting`: a boolean value indicating whether the deletion operation is in progress.
 * 2. `deleteBooking`: a function that can be called to initiate the deletion of a booking.
 */
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking successfully deleted');
      queryClient.invalidateQueries({ queryKey: 'bookings' });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBooking };
}
