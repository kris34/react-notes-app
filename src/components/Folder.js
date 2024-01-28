import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import folderIcon from '../assets/smallFolderIcon.png'

const Folder = props => {
    return (
        <View style={styles.folder}>
            <Image style={styles.folder_icon} source={folderIcon} />
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
        flexDirection: 'row'
    },
    btn_text: {
        height: '100%',
        fontSize: 20,
        marginTop: 12,
        color: 'white',
        width: '220%'
    },
    folder_icon: {
        marginTop: 12,
        marginRight: 20,
        marginLeft: 5
    }
});

export default Folder;
