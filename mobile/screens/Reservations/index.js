import React from "react";
import { ScrollView, Text, Button } from "react-native";

import { ListItem } from "../../components/ListItem";

type Props = {};

export default class ReservationsScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [
        {
          id: "1",
          name: "John Doe",
          hotelName: "Hilton Dallas",
          arrivalDate: new Date("December 17, 2018 08:24:00"),
          departureDate: new Date("December 19, 2018 10:24:00")
        },
        {
          id: "2",
          name: "Jane Smith",
          hotelName: "Hilton New York",
          arrivalDate: new Date("January 3, 2019 14:24:00"),
          departureDate: new Date("January 6, 2019 09:24:00")
        },
        {
          id: "3",
          name: "Mike Hase",
          hotelName: "Hilton Dallas",
          arrivalDate: new Date("March 5, 2019 03:24:00"),
          departureDate: new Date("March 10, 2019 11:24:00")
        }
      ]
    };
  }

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

  render() {
    return (
      <ScrollView>
        {!!this.state.reservations &&
          this.state.reservations.map(reservation => (
            <ListItem
              key={reservation.id}
              primaryText={reservation.name}
              secondaryText={reservation.hotelName}
            />
          ))}
      </ScrollView>
    );
  }
}
