import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

/**
 * The Login function renders a login layout with a logo, heading, and login form in a React component.
 * @returns The Login component is being returned, which includes a LoginLayout component with a Logo, a Heading component with the text "Log in to your account", and a LoginForm component.
 */
function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
