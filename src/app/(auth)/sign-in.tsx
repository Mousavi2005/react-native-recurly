import { Link } from 'expo-router'
import { View } from 'react-native'

const signIn = () => {
  return (
    <View>
      <Link href="/(auth)/sign-up">create account</Link>
    </View>
  )
}

export default signIn