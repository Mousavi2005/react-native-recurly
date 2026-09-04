import { Plus } from "lucide-react-native";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import "../../../global.css";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeareaView } from "react-native-safe-area-context";
import ListHeading from "../../../components/listHeading";
import UpcomingCard from "../../../components/UpcomingCard";
import { upcomingData } from "../../../constants/upcomingData";
import { formatCurrency } from "../../../utilities/formatCurrency";

const SafeAreaView = styled(RNSafeareaView);


export default function App() {
  return (

    <SafeAreaView className="flex-1 bg-background p-5">

      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center gap-6">
          <Image
            source={require("@/assets/images/Me.jpg")}
            className="h-20 w-20 rounded-full"
          />
          <Text className="font-semibold text-2xl">
            Amin Mousavi
          </Text>
        </View>

        <Pressable className="rounded-full border border-gray-500 p-1">
          <Plus size={30} />
        </Pressable>
      </View>

      <View className="p-6 min-h-50 rounded-tr-3xl rounded-bl-3xl bg-Orange flex-col justify-between">
        <Text className="text-white">Balance</Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-white font-semibold text-4xl">
            {formatCurrency(2257.24)}
          </Text>
          <Text className="text-white">
            03/18
          </Text>
        </View>
      </View>

      <View>
        <ListHeading title="Upcoming" />
        <FlatList
          data={upcomingData}
          renderItem={({ item }) => (
            <UpcomingCard data={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>
            No upcoming renewals yet
          </Text>}

        />
      </View>

    </SafeAreaView>

  );
}