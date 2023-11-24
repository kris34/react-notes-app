import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import WriteNote from './pages/WriteNote';
import {Provider} from 'react-redux';
import store from './store/store';
import Edit from './pages/Edit';
import Folders from './pages/Folders';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Folders" component={Folders} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WriteNote" component={WriteNote} />
          <Stack.Screen name="EditNote" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
