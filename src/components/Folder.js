import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Folder = (props) => {
    return (
        <View>
            <Text>
                {props.folder.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(

)

export default Folder;