import { ReactElement, useEffect, useState } from 'react';
import { getAllDataFromServer, searchData } from '../../../api';
import Header from '../../sections/Header';
import Main from '../../sections/Main';
import Search from '../../sections/Search';
import { SAppContainer, SMainArea } from './styles';
import { IAppState, IGenericData } from '../../../types/interfaces';

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
    const search = (await searchData(query)) as IGenericData[];
    if (search) {
      updateSearchResults(search);
    }
  };

  useEffect(() => {
    getAllDataFromServer().then((data: IAppState) => {
      updateServerData(data);
    });
  }, []);

  return (
    <SAppContainer color="gray">
      <Header state={serverData} />
      <SMainArea color="darkgray" onClick={getAllDataFromServer}>
        <Main searchResults={searchResults} searchString={searchString} />
        <Search
          onSearch={onSearch}
          searchString={searchString}
          updateSearchString={updateSearchString}
        />
      </SMainArea>
    </SAppContainer>
  );
};

export default App;
