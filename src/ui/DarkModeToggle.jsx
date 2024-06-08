import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

import ButtonIcon from './ButtonIcon';
import { useDarkMode } from '../context/DarkModeContext';

/**
 * The DarkModeToggle function toggles between displaying a sun or moon icon based on the current dark mode state.
 * @returns The DarkModeToggle component is being returned. It renders a ButtonIcon component with an onClick event that toggles between displaying a sun icon (HiOutlineSun) and a moon icon (HiOutlineMoon) based on the isDarkMode state value obtained from the useDarkMode hook.
 */
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
