import { Tabs } from "expo-router";
import { View } from "react-native";
import { tabs } from "../../../constants/tabs";

const TabLayout = () => {
  const TabIcon = ({ focused, icon: Icon }: any) => {
    return (
      <View
        className={
          focused
            ? "bg-orange-500 rounded-2xl p-2"
            : "p-2"
        }
      >
        <Icon color="white" size={24} />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#0b0f2a",
          position: "absolute",
          bottom: 40,
          width: "90%",
          marginLeft: "5%",
          alignSelf: "center",
          marginHorizontal: "auto",
          paddingBottom: 0,
          borderRadius: 20,
        },

        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={tab.icon}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;