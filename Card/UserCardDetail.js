import React from 'react';
import { View, Text  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../styles/App.Styles';
import FontWeights from '../../styles/App.FontWeights';

const { appColors, textColors, responsiveTextSize } = AppStyles;

const UserCardDetail = ({ icon, size, content }) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                <MaterialIcons name={icon} size={size || 16} style={{ color: appColors.primaryTheme }} />
            </View>
            <View style={{ flex: 6, justifyContent: 'center', backgroundColor: 'transparent' }}>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{

                    ...FontWeights.light,
                    color: textColors.grey700,
                    fontSize: responsiveTextSize(1.8)
                }}>{content}</Text>
            </View>
        </View>
    );
};

export default UserCardDetail;