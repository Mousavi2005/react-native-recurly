import { Link } from "expo-router";
import { Text } from "react-native";
import "../../../global.css";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeareaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeareaView);


export default function App() {
   return (

    <SafeAreaView className="flex-1 bg-background p-5">

      <Text className="text-xl font-bold text-success">

        Welcome to Nativewind!

      </Text>

      <Link href="/onboarding" className="bg-blue-600 text-black rounded-2xl mt-5">Go to onboarding</Link>

      <Link href="/(auth)/sign-in" className="bg-blue-600 text-black rounded-2xl mt-5">Go to sign in</Link>

      <Link href="/(auth)/sign-up" className="bg-blue-600 text-black rounded-2xl mt-5">Go to sing up</Link>

      <Link href="/subscriptions/spotify" className="bg-blue-600 text-black rounded-2xl mt-5">Spotify subscription</Link>

      <Link href={{

        pathname: "/subscriptions/[id]",

        params: { id: "cluade" }

      }} className="bg-blue-600 text-black rounded-2xl mt-5">Claude Max subscription</Link>

    </SafeAreaView>

  );
}