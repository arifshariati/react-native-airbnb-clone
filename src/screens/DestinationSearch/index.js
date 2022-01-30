import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const DestinationSearch = () => {
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');

    
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
                    <Pressable
                        onPress={() => navigation.navigate('GuestScreen')}
                        style={styles.row}

                    >
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}



export default DestinationSearch;
