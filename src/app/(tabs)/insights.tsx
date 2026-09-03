import { styled } from "nativewind";
import { Text } from 'react-native';
import { SafeAreaView as RNSafeareaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeareaView);

const insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>insights</Text>
    </SafeAreaView >
  )
}

export default insights