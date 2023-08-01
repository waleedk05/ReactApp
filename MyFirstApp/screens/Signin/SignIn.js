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
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const showPasswordIcon = require("../../assets/show_password_icon.png");
const hidePasswordIcon = require("../../assets/hide_password_icon.png");

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword((prevState) => !prevState);
  };

  const handleChangeText = (text) => {
    // Handle the text input changes here
  };

  return (
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
            <Text style={styles.signin}>Sign In</Text>

            <Text style={styles.textStyle}>
              Sign in with your data that you entered during your registration.
            </Text>
            <Text style={styles.inputLabel}>Email</Text>

            <TextInput
              style={styles.textInputStyle}
              onChangeText={handleChangeText}
              placeholder="email@example.com"
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
              inputMode="email"
            />
            <Text style={styles.inputLabel}>Password </Text>

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                onChangeText={handleChangeText}
                placeholder="Enter your password"
                autoCapitalize="none"
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity
                style={styles.passwordIconContainer}
                onPress={togglePasswordVisibility}
              >
                <Image
                  source={hidePassword ? showPasswordIcon : hidePasswordIcon}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.signinBtStyle}
              onPress={() => Alert.alert("You are logged in")}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={() => navigation.navigate("Otp")}>
                <Text
                  style={{ fontWeight: "bold", color: "#CF0A0A", fontSize: 13 }}
                >
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signupContainer}>
            <Text style={{ color: "#000000", fontWeight: "400", fontSize: 15 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupText}>Signup</Text>
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

  signinBtStyle: {
    backgroundColor: "#CF0A0A",
    borderRadius: 13,
    paddingHorizontal: 60,
    paddingVertical: "2.5%",
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
    marginTop: 10,
    marginBottom: -4,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    borderWidth: 1,
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 17,
    fontStyle: "normal",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 10,
    backgroundColor: "#f5f5f5",
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },

  passwordIconContainer: {
    padding: 10,
  },

  passwordIcon: {
    width: 24,
    height: 24,
  },
});

export default SignIn;
