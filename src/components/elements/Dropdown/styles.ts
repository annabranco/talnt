import styled from 'styled-components';

interface StyledWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const StyledWrapperElement = styled.div<StyledWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
StyledWrapperElement.displayName = 'StyledWrapperElement';

export const StyledDropdown = styled.select`
  font-size: 1 rem;
  color: black;
`;
StyledDropdown.displayName = 'StyledDropdown';

export const StyledOption = styled.option`
  font-size: 1 rem;
  color: black;
`;
StyledOption.displayName = 'StyledOption';
