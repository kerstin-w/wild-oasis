import Button from '../../ui/Button';
import { useCheckout } from './useCheckout';

/**
 * The CheckoutButton component in a React application allows users to initiate the checkout process for a specific booking.
 * @returns The `CheckoutButton` component is returning a button element with the text "Check out". The button has a primary variation, small size, and an onClick event handler that calls the `checkout` function with the `bookingId` as a parameter. The button is also disabled based on the `isCheckingOut` state value.
 */
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
