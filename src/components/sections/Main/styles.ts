import styled from 'styled-components';

interface SWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
SWrapperElement.displayName = 'SWrapperElement';
