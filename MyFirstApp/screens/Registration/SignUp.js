import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert, TextInput, onChangeText } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function SignUp({ navigation }) {
  return (

    <ImageBackground source={require('../../assets/background_1.png')} resizeMode="cover" style={styles.backGroundStyle}>

      <View>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/lifeaid_logo.png')}
        />

      </View>
      <Text style={styles.signin}>
        Sign Up
      </Text>


      <Text
        style={styles.textStyle}>
        Sign Up with for a new account.
      </Text>


      <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeText}
        placeholder="    Enter your name"
        value={Text}
        autoCapitalize="words"

      />


      <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeText}
        placeholder="    @email.com"
        value={Text}
        autoCapitalize="words"
        textContentType="emailAddress"
        keyboardType="email-address"
        inputMode="email"



      />
      <View style={{ alignItems: 'flex-end', paddingTop: '5%', paddingRight: '10%' }}>
        <Text>
          Forgot your password?
        </Text>

      </View>



      <View>
        <TouchableOpacity
          style={styles.loginStyle}
          onPress={() => Alert.alert("You are signed up")}>

          <Text style={{ fontSize: "16", alignSelf: "center", color: "white", fontWeight: 'bold' }}>
            Sign Up
          </Text>

        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginStyle}
          onPress={() => navigation.goBack('GetStarted')}>

          <Text style={{ fontSize: "16", alignSelf: "center", color: "white", fontWeight: 'bold' }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>




    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  imgBg: {
    flex: 1
  },

  textStyle: {
    alignSelf: "center",
    marginTop: "3%",
    marginLeft: "2%",
    fontSize: "14%",
    fontWeight: 'bold',
    color: "#000000",

  },

  imageStyle: {
    width: 170,
    height: 170,
    marginLeft: "30%",
    marginBottom: "7%",
    resizeMode: "contain",
    marginTop: "-15%"
  },

  logoStyle1: {
    width: 170,
    height: 170,
    marginLeft: "30%",
    marginBottom: "30%",
    resizeMode: "contain",
    marginTop: "50%"
  },

  logoStyle: {
    width: 170,
    height: 170,
    marginLeft: "30%",
    marginBottom: "80%",
    resizeMode: "contain",
    marginTop: "50%"
  },

  textInputStyle: {
    marginTop: '5%',
    borderWidth: '1',
    marginLeft: '10%',
    marginRight: '10%',
    paddingVertical: '4%',
    borderRadius: '10%',
    fontSize: '17%',
    fontStyle: 'normal',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 10,
    backgroundColor: '#f5f5f5'


  },

  loginStyle: {
    backgroundColor: "#CF0A0A",
    borderRadius: "18",
    paddingHorizontal: "1%",
    paddingVertical: "4%",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "10%",
    elevation: "8",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,

  },

  signupStyle: {
    marginLeft: "50%",
    marginRight: "20%",
    marginTop: "-6%",

  },

  backGroundStyle: {
    flex: 1,
    justifyContent: 'center'
  },

  signin: {
    color: "#CF0A0A",
    fontSize: "36",
    fontFamily: 'Arial Rounded MT Bold',
    fontWeight: "700",
    marginLeft: "11%",
  }



})

export default SignUp;