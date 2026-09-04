import { Text, View } from 'react-native'
import { formatCurrency } from '../utilities/formatCurrency'

const UpcomingCard = ({ data }: { data: any }) => {
    const Icon = data.icon
    return (
        <View className="self-start p-3 border border-gray-800 min-w-35 rounded-2xl min-h-30 justify-between mx-2">
            <View className="flex-row gap-2 items-center">
                <Icon width={30} height={30} />

                <View className="flex-col">
                    <Text>{formatCurrency(data.price)}</Text>

                    <Text className="text-gray-600 text-sm">
                        {data.days > 1 ? `${data.days} days left` : "last day"}
                    </Text>
                </View>
            </View>

            <Text className="text-black font-jakarta">
                {data.name}
            </Text>
        </View>
    )
}

export default UpcomingCard