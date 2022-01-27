import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        justifyContent: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 25
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal:10,
        width: Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        top: 20,
        zIndex:100
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;