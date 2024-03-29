import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../store/noteSlice';
import delete_icon from '../assets/delete_icon.png'

const Note = props => {
  const dispatch = useDispatch();

  function navigateEdit() {
    props.navigate('EditNote', {note: props.note});
  }

  function handleDelete() {
    dispatch(deleteNote(props.note));
  }

  return (
    <View style={styles.note}>
      <TouchableOpacity onPress={handleDelete} style={styles.delete_btn}>
       <Image source={delete_icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateEdit} style={styles.note_btn}>
        <Text style={styles.note_text}>{props.note.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  note_btn: {
    flexDirection: 'row',
  },
  note_text: {
    fontSize: 20,
    width: '90%',
    color: 'white'
  },
  note: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  delete_btn: {
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Note;
