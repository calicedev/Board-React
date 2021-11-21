import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalendarScreen from './CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#009688',
      }}>
      
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: '달력',
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default MainTab;
