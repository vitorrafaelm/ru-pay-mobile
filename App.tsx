import 'react-native-gesture-handler';
import { MyLogoutStackRoutes } from './src/routes/logout.routes';
import React from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light, 
  Inter_600SemiBold
} from "@expo-google-fonts/inter";

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_300Light, 
    Inter_600SemiBold
  });

  const MyLogoutRoutes = MyLogoutStackRoutes();

  if(fontsLoaded) {
    return (
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="white"
          hidden={false}
        />
        {MyLogoutRoutes}
      </NavigationContainer>
      
    );
  }
  
}
