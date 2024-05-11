import React, { FC } from 'react';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/Navigations/Routes'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Store, { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';


const App: FC = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
