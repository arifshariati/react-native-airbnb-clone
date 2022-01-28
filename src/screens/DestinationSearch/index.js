import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const DestinationSearch = () => {
    const [inputText, setInputText] = useState('');

    console.log(inputText);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Where are you going?"
            />
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
}



export default DestinationSearch;
