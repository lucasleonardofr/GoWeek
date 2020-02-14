import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import TouchableOpacityButton from '../buttons/TouchableOpacityButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import UserAvatar from 'react-native-user-avatar';
import AppStyles from '../../styles/App.Styles';
import FontWeights from '../../styles/App.FontWeights';
import UserCardDetail from './UserCardDetail';
import ProgressiveImage from '../misc/ProgressiveImage';

const { textColors, shadowStyles, responsiveTextSize } = AppStyles;

class UserCard extends React.PureComponent {

    render() {

        let { cardData: {
            cardId,
            userAvatar,
            firstName,
            middleName,
            lastName,
            position,
            company,
            phoneNumber,
            email,
            location
        },
            appData: { appColors },
            onPress,
            onLongPress,
            onPressMore,
            onPressQrCode,
        } = this.props;

        return (
            <TouchableOpacityButton onLongPress={onLongPress} activeOpacity={0.90} onPress={onPress} style={{
                ...shadowStyles,
                borderRadius: 8,
                backgroundColor: appColors.primaryBackground,
                height: 200,
                width: responsiveWidth(90),
                margin: 10
            }}>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, backgroundColor: 'transparent' }}>
                        <UserAvatar component={ProgressiveImage} src={userAvatar} size={responsiveTextSize(10)} name='NA' />
                    </View>

                    <View style={{ flex: 2, backgroundColor: 'transparent' }}>

                        <View style={{ flex: 2, backgroundColor: 'transparent', justifyContent: 'flex-end', paddingRight: 4 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{

                                ...FontWeights.light,
                                color: textColors.black,
                                fontSize: responsiveTextSize(3.0)
                            }}>{`${firstName} ${middleName} ${lastName}`}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', backgroundColor: 'transparent', paddingRight: 4, paddingTop: 2 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{

                                ...FontWeights.light,
                                color: textColors.grey800,
                                fontSize: responsiveTextSize(2.25)
                            }}>{position}</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'transparent', paddingRight: 8 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{

                                ...FontWeights.light,
                                color: textColors.grey700,
                                fontSize: responsiveTextSize(1.8)
                            }}>{company}</Text>
                        </View>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', padding: 0, backgroundColor: 'transparent' }}>

                    <View style={{ flex: 2, padding: 10, backgroundColor: 'transparent' }}>

                        <UserCardDetail icon={'local-phone'} content={phoneNumber} />
                        <UserCardDetail icon={'email'} content={email} />
                        <UserCardDetail icon={'location-on'} size={20} content={location} />

                    </View>

                    <TouchableOpacityButton onPress={() => onPressQrCode()} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <QRCode
                            size={64}
                            value={`https://linktodomain.com/${cardId}`}
                        />
                    </TouchableOpacityButton>

                </View>

                <TouchableOpacityButton style={{
                    position: 'absolute',
                    padding: 10,
                    top: -4, right: 2
                }} onPress={() => onPressMore()}>
                    <MaterialCommunityIcons name={'dots-horizontal'} color={appColors.primaryTheme} size={25} />
                </TouchableOpacityButton>

            </TouchableOpacityButton>
        );
    };
};

const mapStateToProps = (state) => {

    return {

        appData: state.appData
    };
};

export default connect(mapStateToProps, null)(UserCard);