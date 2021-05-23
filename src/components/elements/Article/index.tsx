import { ReactElement } from 'react';
import { string } from 'prop-types';
import { StyledElement, StyledWrapperElement } from './styles';
import { IGenericData } from '../../../types/interfaces';
import { PGenericData } from '../../../types/propTypes';

export interface IArticleProps {
  data: IGenericData;
}

const Article = ({ data }: IArticleProps): ReactElement => {
  return (
    <StyledWrapperElement color="pink">
      <StyledElement> Article working! </StyledElement>
    </StyledWrapperElement>
  );
};

Article.propTypes = {
  data: PGenericData.isRequired
};

export default Article;
