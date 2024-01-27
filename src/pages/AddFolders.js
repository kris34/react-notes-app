import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import delete_icon from '../assets/delete_icon.png'
import { useDispatch } from 'react-redux';
import { addFolder } from '../store/folderSlice';

const AddFolders = (props) => {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')

  const clearInputText = () => {
    setInputText('')
  }

  const createFolder = () => {
    dispatch(addFolder(inputText));
    props.closeModal()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Folder</Text>
      <View style={styles.input_container}>
        <TextInput
          onChangeText={text => setInputText(text)}
          value={inputText}
          placeholder={'Folder name here'}
          style={styles.input} />
        <TouchableOpacity onPress={clearInputText} style={styles.button_clear}>
          <Image source={delete_icon}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={createFolder}>
          <Text style={styles.button_done}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.closeModal}><Text style={styles.button_back}>Back</Text></TouchableOpacity>
      </View>
    </View >
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
    paddingLeft: 10,
    paddingRight: 35
  },
  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button_done: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  button_clear: {
    position: 'absolute',
    marginTop: 37,
    left: '88%'
  },
  button_back: {
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default AddFolders;
