import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/Screens/Home';


const App = () => {
  return (
    <View>
      {/* <Text>reaxt</Text> */}

      <Provider store={store}>
        <Home />
      </Provider>

    </View>
  )
}

export default App;
