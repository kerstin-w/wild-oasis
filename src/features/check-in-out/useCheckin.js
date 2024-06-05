import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateBooking } from '../../services/apiBookings';

/**
 * The useCheckin function is a custom hook that handles the process of checking in a booking, updating its status and notifying the user of success or error.
 * @returns The `useCheckin` function returns an object with two properties:
 * 1. `checkin`: A function that when called will trigger the mutation to update a booking to 'checked-in' status and mark it as paid. It also handles success and error cases.
 2. `isCheckingIn`: A boolean value indicating whether the check-in mutation is currently in progress (loading state).
 */
export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  /* The `useMutation` hook creates a mutation function for updating a booking to a 'checked-in' status and marking it as paid. */
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/`);
    },
    onError: () => {
      toast.error('There was an error while checking in');
    },
  });
  return { checkin, isCheckingIn };
}
