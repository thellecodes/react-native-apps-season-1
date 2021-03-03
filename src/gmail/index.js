import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Gmail from "./Gmail";

export const assets = [];

const EmailStack = createStackNavigator();

export const EmailNavigator = () => (
  <EmailStack.Navigator headerMode="none" initialRouteName="Gmail">
    <EmailStack.Screen name="Gmail" component={Gmail} />
  </EmailStack.Navigator>
);
