import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CommunityScreen } from "screens";

const Stack = createStackNavigator();

export const CommunityStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Community" component={CommunityScreen} />
    </Stack.Navigator>
  );
};
