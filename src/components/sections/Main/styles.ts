import styled from 'styled-components';

interface SWrapperElementProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  height: 90%;
  max-height: 90%;
  width: 80%;
  overflow-y: auto;
  padding: 5px 20px;
`;
SWrapperElement.displayName = 'SWrapperElement';
