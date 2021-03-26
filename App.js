import React from 'react';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
};

export default App;
