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

    <View style={{ height: "100%", width: "100%", backgroundColor: "#6495ed" }}>


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
      />


      <View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Alert.alert("HaHa! Just Kidding XD")}>

          <Text style={{ fontSize: "16", alignSelf: "center", color: "white" }}>
            Press me to make you Happy
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  imageShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 7 },
    shadowRadius: 7,
    shadowOpacity: 80,

  },

  textStyle: {
    alignSelf: "center",
    marginTop: "10%",
    fontSize: "14%",
    fontStyle: 'bold',
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
    marginTop: '10%',
    borderWidth: '2',
    marginLeft: '10%',
    marginRight: '10%',
    paddingVertical: '4%',
    borderRadius: '10%',
    fontSize: '17%',
    fontStyle: 'italic',
  },

  buttonStyle: {
    backgroundColor: "#008080",
    borderRadius: "18",
    paddingHorizontal: "1%",
    paddingVertical: "4%",
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "20%",
    elevation: "8",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 80,

  }


})

export default App;

