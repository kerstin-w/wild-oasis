import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi2';

import Logout from '../features/authentication/Logout';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li key={'account'}>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li key={'Dark-Mode'}>
        <DarkModeToggle />
      </li>
      <li key={'logout'}>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
