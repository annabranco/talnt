import { ReactElement } from 'react';
import Header from '../../sections/Header';
import Main from '../../sections/Main';
import Search from '../../sections/Search';
import { SAppContainer, SMainArea } from './styles';

const App = (): ReactElement => (
  <SAppContainer color="gray">
    <Header />
    <SMainArea color="darkgray">
      <Main />
      <Search />
    </SMainArea>
  </SAppContainer>
);

export default App;
