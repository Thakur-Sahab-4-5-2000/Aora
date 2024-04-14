import { Tabs } from "expo-router";
import Icons from "../../constants/icons";
import { View, Text, Image } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        alt={name}
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const tabsConfig = [
  { name: "home", title: "Home", icon: Icons?.home },
  { name: "bookmark", title: "Bookmark", icon: Icons?.bookmark },
  { name: "create", title: "Create", icon: Icons?.plus },
  { name: "profile", title: "Profile", icon: Icons?.profile },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          height: 84,
          borderTopColor: "#232533",
        },
      }}
    >
      {tabsConfig.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            headerShown: false,
            title,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icon}
                color={color}
                name={title}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
