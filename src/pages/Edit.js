import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {editNote} from '../store/noteSlice';

const Edit = props => {
  const {note} = props.route.params;
  const [newNote, setNote] = useState(note.text);
  const dispatch = useDispatch();

  const handleBack = () => {
    props.navigation.navigate('Home');
  };

  const handleEdit = () => {
    dispatch(editNote({note: note, newContent: {text: newNote, id: note.id}}));
    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={'Your note here'}
        value={newNote}
        onChangeText={text => setNote(text)}
      />
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.button_text}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button_back} onPress={handleBack}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons_container: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    bottom: 10,
    alignItems: 'center',
    width: '90%',
    margin: 25,
  },
  button: {
    bottom: 10,
  },
  button_back: {
    bottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
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

export default Edit;
