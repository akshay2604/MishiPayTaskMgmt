
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import AppContainer from './src/components/AppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import  {store, persistor} from './src/store';



const App = () => {
  return ( 
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle={"light-content"} animated={true} />            
          <AppContainer/>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default App;
