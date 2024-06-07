import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';

/**
 * The `Logout` function returns a button icon with an arrow pointing right on a rectangle.
 * @returns A ButtonIcon component with a HiArrowRightOnRectangle icon inside.
 */
function Logout() {
  return (
    <ButtonIcon>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
