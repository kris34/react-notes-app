import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../store/noteSlice';

const Note = props => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteNote(props.note));
  }
  return (
    <View style={styles.note}>
      <TouchableOpacity onPress={handleDelete} style={styles.delete_btn}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text style={styles.note_text}>{props.note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  note_text: {
    width: '90%',
  },
  note: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete_btn: {
    marginRight: 10,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Note;
