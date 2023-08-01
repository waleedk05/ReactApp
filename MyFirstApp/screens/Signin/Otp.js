import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Otp({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+92"); //Country Code

  const handleChangeCountryCode = (text) => {
    setCountryCode(text);
  };

  const handleChangePhoneNumber = (text) => {
    // Limiting the phone number to 10 characters
    if (text.length <= 10) {
      setPhoneNumber(text);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/background_1.png")}
          resizeMode="cover"
          style={styles.imgBg}
        >
          <SafeAreaProvider>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              keyboardVerticalOffset={100}
            >
              <View>
                <Image
                  style={styles.imageStyle}
                  source={require("../../assets/lifeaid_logo.png")}
                />
              </View>

              <View style={styles.screen}>
                <Text style={styles.signin}>Reset Password</Text>

                <Text style={styles.textStyle}>
                  In order to reset your password, you need to enter your active
                  phone number.
                </Text>
                <Text style={styles.textStyle}>
                  You will receive a 6-digit CODE on the phone number you
                  entered.
                </Text>

                <View style={styles.phoneNumberContainer}>
                  <Text style={styles.inputLabel}>
                    Enter your phone number:
                  </Text>
                  <View style={styles.phoneInputContainer}>
                    <TextInput
                      style={styles.countryCodeInput}
                      onChangeText={handleChangeCountryCode}
                      placeholder="Country Code"
                      keyboardType="phone-pad"
                      maxLength={3}
                      value={countryCode}
                    />
                    <TextInput
                      style={styles.phoneNumberInput}
                      onChangeText={handleChangePhoneNumber}
                      placeholder="Phone Number"
                      keyboardType="phone-pad"
                      maxLength={10}
                      value={phoneNumber}
                    />
                  </View>
                </View>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.recieveBtStyle}
                  disabled={!phoneNumber || phoneNumber.length < 10}
                >
                  <Text style={styles.buttonText}>Receive Code</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  position: "absolute",
                  bottom: 50,
                }}
              >
                <Text>Copyright © 2023 Life Aid</Text>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  screen: {
    marginLeft: "8%",
    marginRight: "8%",
  },
  forgotPassword: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "7%",
    marginBottom: "-3%",
  },

  textStyle: {
    marginTop: "3%",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },

  imageStyle: {
    width: 170,
    height: 170,
    marginLeft: "30%",
    marginBottom: "7%",
    resizeMode: "contain",
    marginTop: "20%",
  },

  textInputStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    borderWidth: 1,
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderRadius: 10,
    fontSize: 15,
    fontStyle: "normal",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 10,
    backgroundColor: "#f5f5f5",
  },

  recieveBtStyle: {
    backgroundColor: "#CF0A0A",
    borderRadius: 13,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "10%",
    elevation: 8,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,
    alignSelf: "center",
  },

  buttonText: {
    fontSize: 20,
    color: "#EEEEEE",
    fontWeight: "bold",
    alignSelf: "center",
  },

  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },

  signupText: {
    marginLeft: 5,
    color: "#CF0A0A",
    fontWeight: "bold",
    fontSize: 17,
  },

  signin: {
    color: "#CF0A0A",
    fontSize: 36,
    fontFamily: "Arial Rounded MT Bold",
    fontWeight: "700",
  },
  inputLabel: {
    color: "#CF0A0A",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
  },

  phoneNumberContainer: {
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCodeInput: {
    borderWidth: 1,
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: "#f5f5f5",
    width: 75,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: "#f5f5f5",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,
  },
});

export default Otp;
