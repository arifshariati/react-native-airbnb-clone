import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import guestScreenOptions from '../../../assets/data/guestScreenOptions';
import { operation, optionTitle } from '../../../assets/data/constants';
import styles from './styles';



const GuestScreen = () => {
    const navigation = useNavigation();
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleOperation = (title, opr) => {
        switch (title) {
            case optionTitle.ADULTS:
                opr === operation.ADD
                    ? setAdults(adults + 1)
                    : setAdults(Math.max(0, adults - 1));
                break;
            case optionTitle.CHILDREN:
                opr === operation.ADD
                    ? setChildren(children + 1)
                    : setChildren(Math.max(0, children - 1));
                break;
            case optionTitle.INFANTS:
                opr === operation.ADD
                    ? setInfants(infants + 1)
                    : setInfants(Math.max(0, infants - 1));
                break;
            default:
                opr === operation.ADD
                    ? setAdults(adults + 1)
                    : setAdults(Math.max(0, adults - 1));
                break;
        }
    }

    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                {
                    guestScreenOptions.map(({ title, subTitle }, index) =>
                        <View style={styles.row} key={index}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                                <Text style={{ color: '#8d8d8d' }}>{subTitle}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable onPress={() => handleOperation(title, operation.SUBTRACT)} style={styles.button}>
                                    <Text style={{ fontSize: 16, color: '#474747' }}>-</Text>
                                </Pressable>
                                <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
                                    {
                                        title === optionTitle.ADULTS ? adults : title === optionTitle.CHILDREN ? children : infants
                                    }
                                </Text>
                                <Pressable onPress={() => handleOperation(title, operation.ADD)} style={styles.button}>
                                    <Text style={{ fontSize: 16, color: '#474747' }}>+</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                }
            </View>

            <Pressable
                style={styles.searchPressable}
            // onPress={()=> navigation.navigate('')}
            >
                <Text style={styles.searchPressableText}>Search</Text>
            </Pressable>

        </View>
    );
}



export default GuestScreen;
