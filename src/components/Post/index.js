import React from 'react';
import { View, Text, Image, } from 'react-native';

import styles from './styles';

const Post = ({ post }) => {
    const { image, bed, bedroom, type, title, oldPrice, newPrice, totalPrice } = post;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.bedrooms}>{bed} Bed {bedroom} Bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${oldPrice}</Text>
                <Text style={styles.newPrice}>  ${newPrice}</Text>
                <Text style={styles.perNight}> / Night</Text>
            </Text>
            <Text style={styles.totalPrice}>${totalPrice} Total</Text>
        </View>
    );
};

export default Post;
