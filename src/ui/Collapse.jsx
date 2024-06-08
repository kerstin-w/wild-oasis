import React from 'react';
import { useCollapse } from 'react-collapsed';
import styled from 'styled-components';
import { HiChevronDown } from 'react-icons/hi2';

import Heading from './Heading';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color-brand-200);
  transition: all 0.3s ease-in-out;
`;

const StyledIconWrapper = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
  padding: 0 0.9rem;
  color: var(--color-grey-800);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

function Collapse({ children, heading, expanded }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: expanded,
  });

  return (
    <div>
      <StyledButton {...getToggleProps()}>
        <Heading as="h3">{heading}</Heading>
        <StyledIconWrapper isExpanded={isExpanded}>
          <HiChevronDown />
        </StyledIconWrapper>
      </StyledButton>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
}
export default Collapse;
