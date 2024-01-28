import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Folder = props => {
  return (
    <View style={styles.folder}>
      <TouchableOpacity>
        <Text style={styles.btn_text}>{props.folder.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  folder: {
    borderRadius: 10,
    marginBottom: 15,
    height: 50,
    paddingLeft: 7,
    backgroundColor: 'grey',
  },
  btn_text: {
    height: '100%',
    fontSize: 20,
    marginTop: 12,
    color: 'white',
  },
});

export default Folder;
