import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from '../screens/Home';
import Contact from '../screens/contact';
import About from '../screens/About';


const Stack = createNativeStackNavigator();


function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;
