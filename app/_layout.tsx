import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

   const [loaded, error] = useFonts({
      'Lilita-one': require('../assets/fonts/LilitaOne-Regular.ttf'),
      'Limelight': require('../assets/fonts/Limelight-Regular.ttf')
    })
  
    useEffect(() => {
      if(loaded || error) {
        SplashScreen.hideAsync()
      }
    }, [loaded, error]);
  
    if(!loaded && !error) {
      return null;
    }

  return  <Stack>
    <Stack.Screen name="index" options={{
      headerShown: false,
    }} />

    <Stack.Screen name="answer/[uri]" options={{
        headerShown: false,
    }} />

    <Stack.Screen name="advice/[message]" options={{
      headerShown: false,
    }} />

    <Stack.Screen name="camera" options={{
        headerShown: false,
    }} />

    <Stack.Screen name="info" options={{
        headerShown: false,
    }} />
  </Stack>

}
