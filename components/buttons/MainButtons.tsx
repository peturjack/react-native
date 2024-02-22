import { View, Text, Image, ImageProps, TouchableOpacity } from "react-native";

type Props = {
  icon?: ImageProps;
  title?: string;
};

const MainButtons = (props: Props) => {
  return (
    <>
      <View className="flex justify-center">
        <TouchableOpacity>
          <View className="h-[72px] w-[72px] bg-[#fafafa] rounded-full flex justify-center items-center">
            <Image source={props.icon} />
          </View>
        </TouchableOpacity>
        <Text className="text-[#8696BB] flex self-center mt-[8px]">
          {props.title}
        </Text>
      </View>
    </>
  );
};

export default MainButtons;
