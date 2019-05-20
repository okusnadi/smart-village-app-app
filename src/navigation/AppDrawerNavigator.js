import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LinearGradient } from 'expo';

import { HomeStackNavigator } from './HomeStackNavigator';
import { IndexStackNavigator } from './IndexStackNavigator';
import { StaticStackNavigator } from './StaticStackNavigator';
import DrawerNavigatorItems from './DrawerNavigatorItems';

import { texts, colors } from '../config';

// data coming later from API
const drawerRoutes = {
  News: {
    screen: IndexStackNavigator,
    navigationOptions: () => ({
      title: texts.screenTitles.news
    })
  },
  Events: {
    screen: IndexStackNavigator,
    navigationOptions: () => ({
      title: texts.screenTitles.events
    })
  },
  Policy: {
    screen: StaticStackNavigator,
    navigationOptions: () => ({
      title: texts.screenTitles.policy
    })
  },
  Impress: {
    screen: StaticStackNavigator,
    navigationOptions: () => ({
      title: texts.screenTitles.impress
    })
  }
};

const CustomDrawerContentComponent = (props) => {
  const { navigation } = props;
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <LinearGradient colors={['#0c5819', '#09483b']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <ScrollView alwaysBounceVertical={false} style={{ height: '100%' }}>
        <View style={styles.headerContainer}>
          <LinearGradient
            colors={['#0c5819', '#09483b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.header}>
              <Touchable onPress={() => navigation.closeDrawer()} delayPressIn={0}>
                <Icon
                  name="ios-close"
                  type="ionicon"
                  color={colors.lightestText}
                  containerStyle={{ paddingHorizontal: 10 }}
                />
              </Touchable>
            </View>
          </LinearGradient>
        </View>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: Platform.select({
    android: {
      elevation: 4
    },
    ios: {
      shadowOffset: { width: 0, height: 3 },
      shadowColor: colors.darkText,
      shadowOpacity: 0.75,
      shadowRadius: 3
    }
  }),
  header: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height:
      Platform.select({
        android: 56,
        default: 44
      }) + getStatusBarHeight(),
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingTop: getStatusBarHeight()
  }
});

export const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStackNavigator,
      navigationOptions: () => ({
        title: texts.screenTitles.home
      })
    },
    ...drawerRoutes
  },
  {
    initialRouteName: 'HomeStack',
    drawerPosition: 'right',
    drawerType: Platform.OS === 'ios' ? 'slide' : 'front',
    drawerWidth: Dimensions.get('window').width,
    contentComponent: CustomDrawerContentComponent
  }
);
