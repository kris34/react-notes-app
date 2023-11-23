import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'vue';

const Folders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the folders page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default Folders;
