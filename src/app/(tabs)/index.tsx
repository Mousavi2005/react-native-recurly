import { Plus } from "lucide-react-native";
import { styled } from "nativewind";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeareaView } from "react-native-safe-area-context";
import ListHeading from "../../../components/listHeading";
import SubscriptionCard from "../../../components/SubscriptionCard";
import UpcomingCard from "../../../components/UpcomingCard";
import { subscriptionData } from "../../../constants/subscriptionData";
import { upcomingData } from "../../../constants/upcomingData";
import "../../../global.css";
import { formatCurrency } from "../../../utilities/formatCurrency";

const SafeAreaView = styled(RNSafeareaView);

export default function App() {
  // Move all top-level content into a header component
  const renderHeader = () => (
    <View className="gap-4 mb-4">
      {/* Header */}
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

      {/* Balance Card */}
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

      {/* Upcoming Section (Horizontal FlatList) */}
      <View>
        <ListHeading title="Upcoming"/>
        <FlatList
        className="mt-5"
          data={upcomingData}
          renderItem={({ item }) => (
            <UpcomingCard data={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text>No upcoming renewals yet</Text>
          }
        />
      </View>

      {/* Subscriptions Section Title */}
      <ListHeading title="Subscriptions" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        data={subscriptionData}
        renderItem={({ item }) => <SubscriptionCard data={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-4">
            No subscriptions yet
          </Text>
        }
      />
    </SafeAreaView>
  );
}