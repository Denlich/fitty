import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WorkoutsScreen } from "screens";

const Stack = createStackNavigator();

export const WorkoutsStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts" component={WorkoutsScreen} />
    </Stack.Navigator>
  );
};
