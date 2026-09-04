import { Text, TouchableOpacity, View } from 'react-native'

const ListHeading = ({title}: {title:string}) => {
  return (
    <View className='flex-row justify-between items-center mt-4'>
      <Text className='font-jakarta-semibold text-2xl'>{title}</Text>

      <TouchableOpacity className='py-2 px-4 border rounded-3xl'>
        <Text className='font-jakarta'>view all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading