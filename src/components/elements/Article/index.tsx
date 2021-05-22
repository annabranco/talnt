import { ReactElement } from 'react';
import { string } from 'prop-types';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  text: string;
}

const Article = ({ text }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="pink">
      <StyledElement> Article working! </StyledElement>
    </StyledWrapperElement>
  );
};

Article.propTypes = {
  text: string
};

Article.defaultProps = {
  text: undefined
};

export default Article;
