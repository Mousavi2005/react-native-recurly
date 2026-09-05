import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { formatCurrency } from '../utilities/formatCurrency';
import statusLabel from '../utilities/statusLabel';

interface SubscriptionProps {
    data: {
        id: string;
        name: string;
        category?: string;
        plan?: string;
        renewalDate?: string;
        price: number;
        billing: string;
        icon: any;
        activeColor?: string;
        paymentMethod?: string;
        startDate?: string;
        status?: boolean;
    };
}

const SubscriptionCard = ({ data }: SubscriptionProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const activeBg = data.activeColor || '#374151'; // Default dark fill on toggle
    const Icon = data.icon

    return (
        <Pressable onPress={() => setIsSelected((prev) => !prev)}
            className='border border-gray-700 my-3 rounded-xl'
            style={{
                backgroundColor: isSelected ? activeBg : 'transparent',
            }}>
            <View
                className=" p-4  flex-row justify-between items-center "

            >
                <View className="flex-row items-center gap-3">
                    <Icon width={30} height={30}/>
                    <View className="flex-col gap-1">
                        <Text className="font-semibold text-base" numberOfLines={1}>
                            {data.name}
                        </Text>
                        <Text className="text-gray-400 text-xs">
                            {data.category?.trim() || data.plan?.trim() || data.renewalDate?.trim()}
                        </Text>
                    </View>
                </View>

                <View className="flex-col items-end">
                    <Text className="font-bold text-base">{formatCurrency(data.price)}</Text>
                    <Text className="text-gray-500 text-xs">{data.billing}</Text>
                </View>
            </View>

            {isSelected && (
                <View className='flex-col gap-2'>
                    <View className='p-2 flex-row gap-4'>
                        <Text>Payment:</Text>
                        <Text className='text-gray-600' numberOfLines={1}>{data.paymentMethod?.trim()}</Text>
                    </View>
                    <View className='p-2 flex-row gap-4'>
                        <Text>Category:</Text>
                        <Text className='text-gray-600' numberOfLines={1}>{data.category?.trim() || data.plan?.trim() || ""}</Text>
                    </View>
                    <View className='p-2 flex-row gap-4'>
                        <Text>Started:</Text>
                        <Text className='text-gray-600' numberOfLines={1}>{data.startDate?.trim() || ""}</Text>
                    </View>
                    <View className='p-2 flex-row gap-4'>
                        <Text>Renwal Date:</Text>
                        <Text className='text-gray-600' numberOfLines={1}>{data.renewalDate?.trim() || ""}</Text>
                    </View>
                    <View className='p-2 flex-row gap-4'>
                        <Text>Status:</Text>
                        <Text className='text-gray-600' numberOfLines={1}>{typeof data.status === 'boolean' ? statusLabel(data.status) : ""}</Text>
                    </View>
                </View>

            )}

        </Pressable>
    );
};

export default SubscriptionCard;