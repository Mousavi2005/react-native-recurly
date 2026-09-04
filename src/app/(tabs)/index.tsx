import { Link } from "expo-router";
import { Text } from "react-native";
import "../../../global.css";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeareaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeareaView);


export default function App() {
   return (

    <SafeAreaView className="flex-1 bg-background p-5">

      <Text className="text-5xl font-jakarta-extrabold text-primary">
        Home
      </Text>

      <Link href="/onboarding" className=" bg-primary text-white p-4 rounded-2xl mt-5">Go to onboarding</Link>

      <Link href="/(auth)/sign-in" className=" bg-primary text-white p-4 rounded-2xl mt-5">Go to sign in</Link>

      <Link href="/(auth)/sign-up" className=" bg-primary text-white p-4 rounded-2xl mt-5">Go to sing up</Link>


    </SafeAreaView>

  );
}