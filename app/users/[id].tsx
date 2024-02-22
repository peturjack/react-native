import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

const UserPage = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>UserPage</Text>
      <TouchableOpacity
        className="py-3 px-8 bg-blue-700 rounded-full"
        onPress={() => router.push("/")}
      >
        <Text className="text-white text-2xl">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserPage;
