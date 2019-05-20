import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import { Divider } from 'react-native-elements';

import { colors } from '../config';

// export type Props = {
//   items: Route[],
//   activeItemKey?: string | null,
//   activeTintColor?: string,
//   activeBackgroundColor?: string,
//   inactiveTintColor?: string,
//   inactiveBackgroundColor?: string,
//   getLabel: (scene: Scene) => React.ReactNode,
//   onItemPress: (scene: { route: Route, focused: boolean }) => void,
//   itemsContainerStyle?: ViewStyle,
//   itemStyle?: ViewStyle,
//   labelStyle?: TextStyle,
//   activeLabelStyle?: TextStyle,
//   inactiveLabelStyle?: TextStyle,
//   drawerPosition: 'left' | 'right'
// };

/**
 * Component that renders the navigation list in the drawer.
 *
 * based on:
 *   https://github.com/react-navigation/drawer/blob/master/src/views/DrawerNavigatorItems.tsx
 */
const DrawerNavigatorItems = ({
  items,
  activeItemKey,
  activeTintColor,
  activeBackgroundColor,
  inactiveTintColor,
  inactiveBackgroundColor,
  getLabel,
  onItemPress,
  itemsContainerStyle,
  itemStyle,
  labelStyle,
  activeLabelStyle,
  inactiveLabelStyle,
  drawerPosition
}) => (
  <View style={[styles.container, itemsContainerStyle]}>
    {items.map((route, index) => {
      const focused = activeItemKey === route.key;
      const color = focused ? activeTintColor : inactiveTintColor;
      const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
      const scene = { route, index, focused, tintColor: color };
      const label = getLabel(scene);
      const accessibilityLabel = typeof label === 'string' ? label : undefined;
      const extraLabelStyle = focused ? activeLabelStyle : inactiveLabelStyle;
      const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

      return (
        <View key={route.key}>
          <Touchable
            accessible
            accessibilityLabel={accessibilityLabel}
            onPress={() => onItemPress({ route, focused })}
            delayPressIn={0}
          >
            <SafeAreaView
              style={[{ backgroundColor }, styles.item, itemStyle]}
              forceInset={{
                [drawerPosition]: 'always',
                [drawerPosition === 'left' ? 'right' : 'left']: 'never',
                vertical: 'never'
              }}
            >
              {typeof label === 'string' ? (
                <Text style={[styles.label, { color }, labelStyle, extraLabelStyle]}>{label}</Text>
              ) : (
                label
              )}
            </SafeAreaView>
          </Touchable>
          <Divider
            style={{
              backgroundColor: colors.lightestText,
              height: StyleSheet.hairlineWidth,
              opacity: 0.4
            }}
          />
        </View>
      );
    })}
  </View>
);

DrawerNavigatorItems.defaultProps = {
  activeTintColor: colors.darkText,
  activeBackgroundColor: 'transparent',
  inactiveTintColor: colors.lightestText,
  inactiveBackgroundColor: 'transparent'
};

const styles = StyleSheet.create({
  container: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 20
  }
});

export default DrawerNavigatorItems;
