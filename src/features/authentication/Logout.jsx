import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import ButtonIcon from '../../ui/ButtonIcon';
import SpinnerMini from '../../ui/SpinnerMini';

import { useLogout } from './useLogout';

/**
 * The `Logout` function in JavaScript React renders a button that triggers a logout action and displays a loading spinner while the action is in progress.
 * @returns The `Logout` function returns a button with an icon that allows the user to logout. The button is disabled when the logout action is in progress (`isLoading` is true). When the button is clicked, the `logout` function is called. If the action is not in progress, an arrow icon(`HiArrowRightOnRectangle`) is displayed, otherwise a mini spinner (`SpinnerMini`) is shown
 */
function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
