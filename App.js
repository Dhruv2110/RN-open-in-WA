
 /* eslint-disable */
import React,{useState,useRef} from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Platform, KeyboardAvoidingView, Alert , Linking, TouchableOpacity,
} from 'react-native';

import PhoneInput from "react-native-phone-number-input";

const App = () => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  const whatsapp = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    if(!checkValid) {
      return createAlert()
    }
      let url = `whatsapp://send?text=${''}&phone=${formattedValue}`;
      Linking.openURL(url)
  }

  const createAlert = () =>
    Alert.alert(
      "!!! Invalid Phone Number !!!",
      "Please Enter Correct Phone Number",
      [
        { text: "OK", onPress: () => {} }
      ]
    );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1ad1ff' }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Open Whatsapp Without</Text>
        <Text style={styles.headingText}>Saving Phone Number</Text>

      </View>
        <Text style={{color:'white',fontSize:22,fontWeight:'bold',fontStyle:'italic',marginBottom:10}}>Enter Phone Number : </Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text); 
          }}
          withDarkTheme
          withShadow
          autoFocus
          textInputProps={{ autoComplete : 'off'}}
          containerStyle={{ borderRadius: 10, width: '90%', elevation: 10,marginBottom:20}}
          textContainerStyle={{ borderRadius: 10, width: '90%', elevation: 10}}
        />
        <TouchableOpacity onPress={whatsapp} style={styles.wa}>
            <Text style={{ fontSize: 27, color: 'white',fontWeight:'bold',fontStyle:'italic' }}>Open In Whatsapp >></Text>
        </TouchableOpacity>
        <View style={{height:'20%'}}>

        </View>
        </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingVertical:40
  },
  headingContainer:{
    alignItems: 'center',
    width: '90%',
    borderRadius: 15, 
    elevation: 30, 
    // backgroundColor: '#1ad1ff',
    backgroundColor: '#0099cc',
    marginBottom: 50,
    paddingVertical:20,
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10
  },
  headingText:{
    // color: '#367787', 
    color: 'yellow', 
    fontSize: 27, 
    fontWeight: 'bold', 
  },
  wa: {
    justifyContent: 'center',
    alignItems:'center',
    padding: 5,
    height: 60,
    width: '80%',
    backgroundColor: '#5cd65c',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5
  },
});

export default App;
