import React from "react";
import { ScrollView, Text, Button, TouchableOpacity } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { format } from "date-fns";
import { ListItem } from "../../components/ListItem";
import { FETCH_RESERVATIONS } from "../../queries";

type Props = {};

const dateFormat = "MMM D";

export default class ReservationsScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Reservations",
      headerRight: (
        <Button
          title="Add new"
          onPress={() => navigation.navigate("NewReservation")}
        />
      )
    };
  };

  fetchReservations = () => (
    <Query query={FETCH_RESERVATIONS}>
      {({ loading, error, data }) => {
        if (loading) return <Text>...Loading</Text>;
        if (error) return <Text>Error :(</Text>;

        return data.reservations.map(reservation => (
          <TouchableOpacity
            key={reservation.id}
            onPress={() =>
              this.props.navigation.navigate("ReservationDetails", reservation)
            }
          >
            <ListItem
              primaryText={reservation.name}
              secondaryText={reservation.hotelName}
              rightText={`${format(
                reservation.arrivalDate,
                dateFormat
              )} - ${format(reservation.departureDate, dateFormat)}`}
            />
          </TouchableOpacity>
        ));
      }}
    </Query>
  );

  componentDidUpdate() {
    {
      this.fetchReservations();
    }
  }

  render() {
    return <ScrollView>{this.fetchReservations()}</ScrollView>;
  }
}
