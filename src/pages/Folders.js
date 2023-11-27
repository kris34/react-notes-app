import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const Folders = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Folders</Text>
      <View style={styles.buttons_container}>
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
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
    borderColor: 'black',
    borderWidth: 1,
    bottom: 10,
  },
});

export default Folders;
