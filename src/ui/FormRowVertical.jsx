import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

/**
 * The `FormRowVertical` renders a form row with a label, children
 * elements, and an error message if present.
 * @returns The `FormRowVertical` function is returning a JSX element that represents a form row with a label, children elements, and an error message. The structure of the returned JSX element includes a styled form row (`StyledFormRow`) containing the following components conditionally rendered based on the presence of `label` and `error` props
 */
function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
