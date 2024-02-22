import React from "react";
import { View, Text, Image, ImageComponent } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  name: string;
  occupation: string;
  scheduledTime: string;
  image?: ImageComponent;
  icon?: string;
  isNotDefaultColors?: boolean;
};

const Card = (props: Props) => {
  const colors = {
    background: "bg-white",
    name: "text-black",
    time: "text-gray-500",
    occupation: "text-gray-500",
  };
  if (props.isNotDefaultColors) {
    colors.background = "bg-blue-500";
    colors.name = "text-white";
    colors.time = "text-white";
    colors.occupation = "text-gray-300";
  }
  const img = require("../../assets/Frame-icon.png");
  return (
    <View className={`${colors.background} h-32 rounded-xl mt-8`}>
      <View className="flex flex-row h-[60%] items-center border-b-2 border-opacity-20 mx-4 justify-between">
        <View className=" flex flex-row">
          <Image
            source={props.image || img}
            className="w-12 h-12 bg-white rounded-full"
          />
          <View className="ml-2">
            <Text className={`${colors.name} text-base`}>{props.name}</Text>
            <Text className={`${colors.occupation}`}>{props.occupation}</Text>
          </View>
        </View>
        <MaterialIcons
          className="rounded-full text-gray-300"
          name="arrow-forward-ios"
          size={24}
          color="white"
        />
      </View>
      <View className="mx-4 flex flex-row justify-between h-[40%] items-center">
        <Text className="text-gray-300">Sunday, 12 June</Text>
        <Text className={`${colors.time}`}>{props.scheduledTime}</Text>
      </View>
    </View>
  );
};

export default Card;
