import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddFolders = (props) => {

return (
    <View style={styles.text}>
      <Text style={styles.text}>New Folder</Text>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        {/* Button to go back to the "Folders" page */}
        <TouchableOpacity onPress={props.closeModal}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'grey'
  }
});

export default AddFolders;
