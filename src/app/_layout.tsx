import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../../global.css";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    JakartaBold: require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    JakartaExtraBold: require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    JakartaExtraLight: require("@/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    JakartaLight: require("@/assets/fonts/PlusJakartaSans-Light.ttf"),
    JakartaMedium: require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
    JakartaRegular: require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    JakartaSemiBold: require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf")
  })

  useEffect(()=>{
    if (fontLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if (!fontLoaded) return null;
  return <Stack screenOptions={{headerShown: false}} />;
}
