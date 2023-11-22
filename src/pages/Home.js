import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {addNote, selectNotes} from '../store/noteSlice';
import Note from '../components/Note';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = props => {
  const dispatch = useDispatch();

  function redirect() {
    props.navigation.navigate('WriteNote');
  }

  const notes = useSelector(selectNotes);

  function addTenNotes() {
    for (let i = 0; i < 20; i++) {
      const note = dispatch(addNote(`note ${i}`));
    }
  }

  function renderItem(item) {
    return (
      <Note
        navigate={props.navigation.navigate}
        note={{text: item.item.text, id: item.item.id}}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        style={styles.flatlist}
        windowSize={1}
        data={notes.length > 0 && notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        maxToRenderPerBatch={50}
        initialNumToRender={1}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.addNote}
        onPress={redirect}>
        <Text style={styles.addNote_text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addTenNotes}>
        <Text>ADD NOTE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    margin: 25,
  },
  addNote: {
    margin: 25,
    backgroundColor: 'grey',
    width: 70,
    height: 70,
    borderRadius: 60,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
    borderWidth: 1,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  addNote_text: {
    fontSize: 25,
  },
  notes_container: {
    padding: 25,
  },
  flatlist: {
    maxHeight: '60%',
    margin: 25,
  },
});

export default Home;
