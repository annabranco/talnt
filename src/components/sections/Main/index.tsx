import { ReactElement } from 'react';
import { arrayOf, string } from 'prop-types';
import Article from '../../elements/Article';
import { StyledElement, StyledWrapperElement } from './styles';
import { IGenericData } from '../../../types/interfaces';
import { PGenericData } from '../../../types/propTypes';

export interface IMainProps {
  searchResults: IGenericData[];
}

const Main = ({ searchResults }: IMainProps): ReactElement => {
  return (
    <StyledWrapperElement color="orange">
      <StyledElement> Main working! </StyledElement>
      <Article />
    </StyledWrapperElement>
  );
};

Main.propTypes = {
  searchResults: arrayOf(PGenericData).isRequired
};

export default Main;
