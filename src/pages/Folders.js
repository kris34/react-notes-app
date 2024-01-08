import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import button_add from '../assets/button_add.png';

const Folders = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home');
  };

  const navigateAddFolders = () => {
    props.navigation.navigate('AddFolders');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Folders</Text>
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={navigateAddFolders}>
          <Image source={button_add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateHome} style={styles.back_button}>
          <Text style={styles.back_button}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    margin: 25,
    fontWeight: 'bold',
  },
  back_button: {
    fontSize: 30,
    fontWeight: 'bold',
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
});

export default Folders;
