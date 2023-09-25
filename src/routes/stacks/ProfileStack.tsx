import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "screens";

const Stack = createStackNavigator();

export const ProfileStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
