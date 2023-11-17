import React from 'react';
import {StyleSheet, View} from 'react-native';

const Note = props => {
  return (
    <View>
      <Text>{props.note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Note;
