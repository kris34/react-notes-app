import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setNote} from '../store/noteReducer';
import {addNote} from '../store/actions';

const WriteNote = ({navigation}) => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(addNote(note));
    setNote('');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={'Your note here'}
        value={note}
        onChangeText={text => setNote(text)}
      />
      <TouchableOpacity onPress={() => handleSaveNote()} style={styles.button}>
        <Text style={styles.button_text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    margin: 25,
  },
  button_text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    color: 'black',
    margin: 25,
    fontSize: 35,
  },
});

export default WriteNote;
