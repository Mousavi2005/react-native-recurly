import { Link } from 'expo-router'
import { View } from 'react-native'

const signUp = () => {
  return (
    <View>
      <Link href="/(auth)/sign-in">sign in</Link>
    </View>
  )
}

export default signUp