import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateBooking } from '../../services/apiBookings';

/**
 * The `useCheckout` function handles the checkout process for a booking by updating its status and displaying success or error messages.
 * @returns The `useCheckout` function returns an object with two properties:
 * 1. `checkout`: This is a function that can be called to initiate the checkout process for a booking.
 * It uses the `useMutation` hook to update the booking status to 'checked-out' and handles success and error cases.
 * 2. `isCheckingOut`: This is a boolean value that indicates whether the checkout process is currently
 */
export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error('There was an error while checking out');
    },
  });
  return { checkout, isCheckingOut };
}
