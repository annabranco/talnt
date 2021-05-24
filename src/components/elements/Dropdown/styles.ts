import styled from 'styled-components';

interface SWrapperElementProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
`;
SWrapperElement.displayName = 'SWrapperElement';

export const SDropdown = styled.select`
  height: 30px;
  border: 1px solid white;
  cursor: pointer;
  background: linear-gradient(to right, skyblue, transparent);
  border-radius: 40px;
  padding: 5px 20px;
  border: none;
  font-weight: 700;
  outline: none;

  &:disabled {
    background: rgba(255, 255, 255, 0.4);
    color: darkgray;
    cursor: not-allowed;
  }
  &:focus {
    background: linear-gradient(to right, yellow, transparent);
  }
`;
SDropdown.displayName = 'SDropdown';

export const SOption = styled.option`
  font-size: 0.8rem;
  color: black;
  border-radius: 5px;
  background: rgba(135, 206, 235, 0.7);
  border: none;
  cursor: pointer;
`;
SOption.displayName = 'SOption';
