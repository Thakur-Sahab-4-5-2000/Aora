import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//Constants, Components
import images from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-white text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between flex-row mb-6 items-center">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Thakur
                </Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="font-pregular text-gray-100 text-lg">
                Trending Videos
              </Text>
            </View>
            <Trending
              posts={
                [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] ?? []
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
