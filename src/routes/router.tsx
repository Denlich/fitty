import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommunityStack, HomeStack, ProfileStack, WorkoutsStack } from "./stacks";

const Tab = createBottomTabNavigator();

const Router = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="WorkoutsTab" component={WorkoutsStack} />
        <Tab.Screen name="CommunityTab" component={CommunityStack} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
