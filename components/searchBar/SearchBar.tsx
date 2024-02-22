import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="py-4 mt-5 bg-[#fafafa] rounded-2xl ">
      <TextInput
        className="text-base ml-4"
        placeholder="Search doctor or health issue"
      ></TextInput>
    </View>
  );
};

export default SearchBar;
