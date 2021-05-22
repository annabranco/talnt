import { ReactElement } from 'react';
import { string } from 'prop-types';
import Article from '../../elements/Article';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  text: string;
}

const Main = ({ text }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="orange">
      <StyledElement> Main working! </StyledElement>
      <Article />
    </StyledWrapperElement>
  );
};

Main.propTypes = {
  text: string
};

Main.defaultProps = {
  text: undefined
};

export default Main;
