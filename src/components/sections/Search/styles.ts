import styled, { css } from 'styled-components';
import { MIN_CHARS } from '../../../constants';

interface SSearchWrapperProps extends React.ComponentPropsWithoutRef<'aside'> {
  color?: string;
}

export const SSearchWrapper = styled.aside<SSearchWrapperProps>`
  position: relative;
  background: ${({ color }) => color || 'none'};
  height: 100%;
  width: 20%;
  padding: 10px 20px;
  border-radius: 10px;
`;
SSearchWrapper.displayName = 'SSearchWrapper';

export const SSearchInput = styled.input`
  width: 100%;
  font-size: 1 rem;
  color: gray;
  text-decoration: double;
`;
SSearchInput.displayName = 'SSearchInput';

interface SSearchLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  text: string;
}

export const SSearchLabel = styled.label<SSearchLabelProps>`
  position: absolute;
  right: 35px;
  top: 39px;
  background: linear-gradient(to bottom, rgba(211, 211, 211, 0.8), white);
  padding: 0 5px;
  font-size: 0.8rem;
  color: black;
  text-align: right;
  font-weight: 600;

  ${({ text }) =>
    text === MIN_CHARS &&
    css`
      color: crimson;
    `}
`;
SSearchLabel.displayName = 'SSearchLabel';

export const SSearchTitle = styled.h3`
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: darkblue;
  text-align: center;
`;
SSearchTitle.displayName = 'SSearchTitle';
