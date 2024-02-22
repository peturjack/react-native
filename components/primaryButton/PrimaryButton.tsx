import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
  buttonText: string;
};

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/booking")}
      className="bg-[#EFF7FF] rounded-full px-8 py-3 flex justify-center items-center mt-4"
    >
      <Text className="text-[#4894FE] font-bold text-base">
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
