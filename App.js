import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateNotes from './components/CreateNotes';
import Mainpage from './components/Mainpage';
import Note from './components/Note';
import News from './components/News';
import Weather from './components/Weather';

import { SevtyleSheet } from 'react-native';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            headerMode="none"
            
            >

            <Stack.Screen name='Home' options={{title: 'Odyssey Notes'}} component={Mainpage} />

            <Stack.Screen 
              name='CreateNotes' 
              component={CreateNotes}
              options={{
                cardStyleInterpolator: forFade
              }} />
              
              <Stack.Screen 
              name='Note' 
              component={Note}
              options={{
                cardStyleInterpolator: forFade
              }} />

              <Stack.Screen 
              name='News' 
              component={News}
              options={{
                cardStyleInterpolator: forFade
              }} />
               <Stack.Screen 
              name='Weather' 
              component={Weather}
              options={{
                cardStyleInterpolator: forFade
              }} />

          </Stack.Navigator>
        </NavigationContainer>
        
      </ApplicationProvider>
  );
}

