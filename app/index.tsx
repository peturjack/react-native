import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Card from "../components/card/card";
import SearchBar from "../components/searchBar/SearchBar";
import MainButtons from "../components/buttons/MainButtons";
import PrimaryButton from "../components/primaryButton/PrimaryButton";

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mx-6">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-gray-400 text-2xl">Hello</Text>
          <Text className="text-3xl font-bold">Hi James</Text>
        </View>
        <Image
          source={require("../assets/Frame-icon.png")}
          className="w-8 h-8 rounded-full"
        ></Image>
      </View>
      <Card
        image={require("../assets/doctor-1-icon.png")}
        isNotDefaultColors={true}
        name="Dr. Imran Syahir"
        occupation="General Doctor"
        scheduledTime="11:00 - 12:00 AM"
      />
      <SearchBar />
      <View className="flex flex-row mt-[24px] gap-x-4">
        <View>
          <MainButtons
            title="Covid 19"
            icon={require("../assets/sun-icon.png")}
          />
        </View>
        <View>
          <MainButtons
            title="Doctor"
            icon={require("../assets/profile-add-icon.png")}
          />
        </View>
        <View>
          <MainButtons
            title="Medicine"
            icon={require("../assets/link-icon.png")}
          />
        </View>
        <View>
          <MainButtons
            title="Hospital"
            icon={require("../assets/hospital-icon.png")}
          />
        </View>
      </View>
      <Text className="font-semibold text-base mt-[32px] mx-2">
        Near Doctor
      </Text>

      <Card
        image={require("../assets/doctor-2-icon.png")}
        name="Dr. Joseph Brostito"
        occupation="Dental Specialist"
        scheduledTime="Open at 17.00"
      />
      <PrimaryButton buttonText="Book appointment" />
    </SafeAreaView>
  );
};

export default HomePage;
