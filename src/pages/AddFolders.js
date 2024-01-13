import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const AddFolders = props => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Text>This is the add folders page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 50,
  },
});

export default AddFolders;
