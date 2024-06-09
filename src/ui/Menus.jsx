import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

/**
 * The Menus component manages the state of openId, position, and provides functions to open and close menus.
 * @returns The `Menus` component is returning a `MenusContext.Provider` component with the following context value: `{ openId, close, open, position, setPosition }`. The children of the `Menus`component are also being rendered within the `MenusContext.Provider`.
 */
function Menus({ children }) {
  const [openId, setopenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setopenId('');
  const open = setopenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

/**
 * The Toggle component in React handles click events to open or close a menu and position it accordingly.
 * @returns The Toggle component is returning a styled button element with an onClick event handler that calls the handleClick function when clicked. Inside the handleClick function, it calculates the position of the button relative to the window and updates the position state using the setPosition function from the MenusContext. It then checks if the openId is empty or not equal to the current id, and either opens the menu associated with the id using
 */
function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

/**
 * The List component renders children within a styled list element based on the openId and position context values.
 * @returns The `List` component is returning a `StyledList` component with the specified `position` prop and children elements, which is then rendered using `createPortal` to ensure it is appended to the `document.body`. The component checks if the `openId` from the `MenusContext` matches the `id` prop, and if not, it returns `null`.
 */
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);

  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;
  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

/**
 * The Button component includes a click handler that triggers an optional function and closes a context menu.
 * @returns The `Button` component is returning a list item (`<li>`) containing a styled button (`<StyledButton>`) with an icon and text content. When this button is clicked, the `handleClick` function is called. This function first calls the `onClick` function (if it exists) and then calls the `close` function from the `MenusContext`.
 */
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
