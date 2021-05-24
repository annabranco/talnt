import { ReactElement, useEffect, useState } from 'react';
import { getAllDataFromServer, searchData } from '../../../api';
import Header from '../../sections/Header';
import Main from '../../sections/Main';
import Search from '../../sections/Search';
import { IAppState, IGenericData } from '../../../types/interfaces';
import { SAppContainer, SMainArea, FakeElement } from './styles';
import { GlobalStyles } from '../../../styles/global';

export const initialState = {
  companies: [],
  moves: [],
  regions: []
};

const App = (): ReactElement => {
  const [serverData, updateServerData] = useState(initialState as IAppState);
  const [searchResults, updateSearchResults] = useState(
    [] as IGenericData[] | never[]
  );
  const [searchString, updateSearchString] = useState('');

  const onSearch = async (query: string) => {
    updateSearchString(query);
    if (query.length >= 2) {
      const search = (await searchData(query)) as IGenericData[];
      if (search) {
        updateSearchResults(search);
      }
    } else {
      updateSearchResults([]);
    }
  };

  useEffect(() => {
    getAllDataFromServer().then((data: IAppState) => {
      updateServerData(data);
    });
  }, []);

  return (
    <SAppContainer color="lightgray">
      <GlobalStyles />
      <Header state={serverData} />
      <SMainArea color="darkgray">
        <Main searchResults={searchResults} searchString={searchString} />
        <Search searchString={searchString} onSearch={onSearch} />
      </SMainArea>
      <FakeElement onClick={getAllDataFromServer} />
    </SAppContainer>
  );
};

export default App;
