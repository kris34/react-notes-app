import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {selectNotes} from '../store/noteSlice';

const Home = props => {
  function redirect() {
    props.navigation.navigate('WriteNote');
  }

  const notes = useSelector(selectNotes);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <Text>{notes}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.addNote}
        onPress={redirect}>
        <Text style={styles.addNote_text}>+</Text>
      </TouchableOpacity>
    </View>
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
});

export default Home;
