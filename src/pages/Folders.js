import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import button_add from '../assets/button_add.png';
import Modal from 'react-native-modal';
import AddFolders from './AddFolders';
import { useSelector } from 'react-redux';
import { selectFolders } from '../store/folderSlice';
import Folder from '../components/Folder';

const Folders = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const folders = useSelector(selectFolders)

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  const navigateHome = () => {
    props.navigation.navigate('Home');
  };

  function renderItem(item) {
    return (<Folder folder={{ name: item.item.name, id: item.item.id }} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Folders</Text>
      <FlatList
        style={styles.flatlist}
        windowSize={1}
        data={folders.length > 0 && folders}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        maxToRenderPerBatch={50}
        initialNumToRender={1}
      />
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={toggleModal}>
          <Image source={button_add} />
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}>
          <View style={styles.modal}>
            <AddFolders closeModal={toggleModal} />
          </View>
        </Modal>
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
  modal: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 10,
  },
  flatlist: {

  }
});

export default Folders;
