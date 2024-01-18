import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddFolders = (props) => {
  const [inputText, setInputText] = useState('')

  const clearInputText = () => {
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Folder</Text>
      <View>
        <TextInput
          placeholder={'Folder name here'}
          style={styles.input} />
          <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={props.closeModal}>
          <Text style={styles.button_done}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'grey',
    margin: 10,
    borderRadius: 10,
    height: 40,
    marginTop: 30,
    fontSize: 20,
    paddingLeft: 10
  },
  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the end (right)
    alignItems: 'center',
    margin: 25,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  button_done: {
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default AddFolders;
