import React from 'react';
import { View, FlatList } from 'react-native';
import { Post } from '../../components';
import feed from '../../../assets/data/feed';

import styles from './styles';

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
        </View>
    );
}


export default SearchResultsScreen;
