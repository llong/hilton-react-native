/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import ReservationsScreen from "./screens/Reservations";
import NewReservationScreen from "./screens/NewReservation";

const RootState = createStackNavigator(
  {
    Home: ReservationsScreen,
    NewReservation: NewReservationScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootState />;
  }
}
