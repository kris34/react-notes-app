import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {addNote, selectNotes} from '../store/noteSlice';
import Note from '../components/Note';
import {SafeAreaView} from 'react-native-safe-area-context';
import folderIcon from '../assets/folderIcon.png';
import button_add from '../assets/button_add.png';

const Home = props => {
  const dispatch = useDispatch();

  function redirectWriteNote() {
    props.navigation.navigate('WriteNote');
  }

  function redirectFolders() {
    props.navigation.navigate('Folders');
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
      <View style={styles.buttons_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={redirectWriteNote}>
          <Image source={button_add} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addTenNotes}>
          <Text>ADD NOTE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={redirectFolders} style={styles.folders_btn}>
          <Image source={folderIcon} style={styles.folder_icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  folder_icon: {
    width: 70,
    height: 70,
  },
  buttons_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    margin: 25,
  },
  addNote: {
    backgroundColor: 'grey',
    width: 70,
    height: 70,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
  folders_btn: {},
});

export default Home;
