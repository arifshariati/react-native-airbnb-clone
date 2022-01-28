import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const bgImage = require('../../../assets/images/wallpaper.jpg');

const HomeScreen = () => {

    const navigation = useNavigation();
    return (

        <View>
            <Pressable
                onPress={() => navigation.navigate('DestinationSearch')}
                style={styles.searchButton}
            >
                <Fontisto name={'search'} size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground source={bgImage} style={styles.image} >
                <Text style={styles.title}>GO NEAR</Text>
                <Pressable onPress={() => console.warn('Explore Button Clicked')} style={styles.button}>
                    <Text style={styles.buttonText}>Explore Nearby Stays</Text>
                </Pressable>
            </ImageBackground>
        </View>

    )

};

export default HomeScreen;