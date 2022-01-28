import React from 'react';
import { View, Text, Image, } from 'react-native';

import styles from './styles';

const imageURI = 'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4='

const Post = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageURI }} />
            <Text style={styles.bedrooms}>1 Bed 1 Bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>Beautiful View with Least Price</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>  $30</Text>
                <Text style={styles.perNight}> / Night</Text>
            </Text>
            <Text style={styles.totalPrice}>$230 Total</Text>
        </View>
    );
};

export default Post;
