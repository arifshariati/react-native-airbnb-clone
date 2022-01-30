import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/navigation/Router';

import { withAuthenticator } from 'aws-amplify-react-native'

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
