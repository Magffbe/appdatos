import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ApiList from './components/ApiList';



const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <ApiList />
    </SafeAreaView>
    </>
  );
};

export default App;
