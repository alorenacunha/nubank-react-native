import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

if (__DEV__) {
  require('react-devtools');
}
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#6D119F" />
    <Routes />
  </>
);

export default App;
