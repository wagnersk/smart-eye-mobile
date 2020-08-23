import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo'


import {
   Poppins_400Regular,
   Poppins_700Bold,
   useFonts
  } from '@expo-google-fonts/poppins'

  import {
    Roboto_400Regular
   } from '@expo-google-fonts/roboto'
 
   

   import { SafeAreaProvider } from 'react-native-safe-area-context';



import Home from './src/Pages/Home'



export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Roboto_400Regular,
    Poppins_700Bold,

  })


  if(!fontsLoaded){
    return <AppLoading/>
  }
  return ( 
       <SafeAreaProvider>
  <Home />
      <StatusBar  backgroundColor={"#fff"} />

       </SafeAreaProvider>

     
      
  );
}