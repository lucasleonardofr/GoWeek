import React from 'react';
import { View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import TouchableOpacityButton from '../buttons/TouchableOpacityButton';
import TouchableBounceButton from '../buttons/TouchableBounceButton';

import Placeholder from 'rn-placeholder';
import AppStyles from '../../styles/App.Styles';

const { appColors, shadowStyles, textColors } = AppStyles;

class UserCard extends React.PureComponent {

    render() {

        return (
            <TouchableBounceButton onPress={() => null} style={{
                ...shadowStyles,
                borderRadius: 8,
                backgroundColor: appColors.primaryBackground,
                height: 200,
                width: responsiveWidth(90),
                margin: 10
            }}>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, backgroundColor: 'trasparent' }}>

                        <Placeholder.Media
                            color={textColors.grey200}
                            size={80}
                            hasRadius
                            onReady={false}
                        />

                    </View>

                    <View style={{ flex: 2, backgroundColor: 'transparent' }}>

                        <View style={{ flex: 2, backgroundColor: 'transparent', justifyContent: 'flex-end', paddingBottom: 5, paddingRight: 4 }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(50)}
                                color={textColors.grey200}
                                textSize={20}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', paddingRight: 4 }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(40)}
                                color={textColors.grey200}
                                textSize={14}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>
                        <View style={{ flex: 1, backgroundColor: 'transparent', paddingRight: 8 }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(30)}
                                color={textColors.grey200}
                                textSize={14}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', padding: 0, backgroundColor: 'transparent' }}>

                    <View style={{ flex: 2, padding: 10, paddingLeft: 16, backgroundColor: 'transparent' }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(56)}
                                textSize={14}
                                color={textColors.grey200}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(56)}
                                textSize={14}
                                color={textColors.grey200}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>


                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' }}>

                            <Placeholder.Line
                                hasRadius
                                width={responsiveWidth(56)}
                                textSize={14}
                                color={textColors.grey200}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                    </View>

                    <TouchableOpacityButton onPress={() => null} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>

                        <Placeholder.Box
                            radius={4}
                            hasRadius
                            color={textColors.grey200}
                            animate={'fade'}
                            height={responsiveHeight(10)}
                            width={responsiveHeight(10)}
                            onReady={false}
                        />

                    </TouchableOpacityButton>

                </View>

            </TouchableBounceButton>
        );
    };
};

export default UserCard;