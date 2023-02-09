import {
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  onChangeText,
  StyleSheet
} from "react-native";

import React from 'react';


function App() {
  return (

    <View style={{ flex: 1, backgroundColor: "#6495ed" }}>


      <View style={styles.imageShadow}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/003/026/186/original/wa-logo-monogram-modern-design-template-free-vector.jpg",
          }}
        />
      </View>


      <Text
        style={styles.textStyle}>
        Welcome to Waleed Ahmed's Application
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


      <View>
        <TouchableOpacity
          style={styles.happyStyle}
          onPress={() => Alert.alert("HaHa! Just Kidding XD")}>

          <Text style={{ fontSize: "16", alignSelf: "center", color: "white", fontWeight: 'bold' }}>
            Logn In
          </Text>

        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.angryStyle}
          onPress={() => Alert.alert("You are dumb!")}>

          <Text style={{ fontSize: "16", alignSelf: "center", color: "white", fontWeight: 'bold' }}>
            Sign Up
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  imageShadow: {
    shadowColor: 'purple',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 80,

  },

  textStyle: {
    alignSelf: "center",
    marginTop: "10%",
    fontSize: "14%",
    fontWeight: 'bold',
    color: "black",
  },

  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: "200",
    alignSelf: "center",
    marginTop: "40%",
    resizeMode: "contain",
  },

  textInputStyle: {
    marginTop: '8%',
    borderWidth: '2',
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

  happyStyle: {
    backgroundColor: "#008080",
    borderRadius: "18",
    paddingHorizontal: "1%",
    paddingVertical: "4%",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "15%",
    elevation: "8",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,

  },

  angryStyle: {
    backgroundColor: "#2e8b57",
    borderRadius: "18",
    paddingHorizontal: "0%",
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

  }


})

export default App;

