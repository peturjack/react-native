import { View, Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import Card from "../../components/card/card";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const Booking = () => {
  return (
    <>
      <SafeAreaView className="flex-1 bg-white mx-6">
        <Link href="/">
          <Text>Go back</Text>
        </Link>
        <Card
          image={require("../../assets/doctor-2-icon.png")}
          name="Dr. Joseph Brostito"
          occupation="Dental Specialist"
          scheduledTime="11:00 - 12:00 AM"
        />
        <PrimaryButton buttonText="Detail" />

        <Card
          image={require("../../assets/doctor-3-icon.png")}
          name="Dr. Bessie Coleman"
          occupation="Dental Specialist"
          scheduledTime="11:00 - 12:00 AM"
        />
        <PrimaryButton buttonText="Detail" />

        <Card
          image={require("../../assets/doctor-4-icon.png")}
          name="Dr. Babe Didrikson"
          occupation="Dental Specialist"
          scheduledTime="11:00 - 12:00 AM"
        />
        <PrimaryButton buttonText="Detail" />
      </SafeAreaView>
    </>
  );
};

export default Booking;
