import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-2xl font-bold">Home Screen.</Text>
      <Image source={require("../../assets/images/react-logo.png")} 
      style={{ width: 100, height: 100, borderRadius: 20 }}/>
    </View>
  );
}
