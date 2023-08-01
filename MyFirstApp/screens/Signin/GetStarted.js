import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/background_1.png")}
      style={styles.imgBg}
    >
      <SafeAreaProvider style={styles.GetStarted}>
        <View>
          <Image
            style={styles.logoStyle1}
            source={require("../../assets/lifeaid_logo.png")}
          />
          <TouchableOpacity
            style={styles.GetStStyle}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  GetStarted: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoStyle1: {
    width: 170,
    height: 170,
    marginBottom: "15%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  GetStStyle: {
    backgroundColor: "#CF0A0A",
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 18,
    marginTop: "7%",
    elevation: 8,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default GetStarted;
