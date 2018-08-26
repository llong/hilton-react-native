/**
 * Mobile App for Hilton Code Test
 * Author: Lewis Long
 * Created: 08/24/2018
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import ReservationsScreen from "./screens/Reservations";
import NewReservationScreen from "./screens/NewReservation";
import ReservationDetailsScreen from "./screens/ReservationDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const RootState = createStackNavigator(
  {
    Home: ReservationsScreen,
    NewReservation: NewReservationScreen,
    ReservationDetails: ReservationDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootState />
      </ApolloProvider>
    );
  }
}
