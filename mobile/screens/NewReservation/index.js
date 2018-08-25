import React from "react";
import {
  View,
  Text,
  DatePickerIOS,
  Modal,
  TouchableHighlight
} from "react-native";

import { TextInput } from "../../components/TextInput";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import { format } from "date-fns";

export default class NewReservationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalDate: new Date(),
      departureDate: new Date(),
      arrivalModalVisible: false,
      departureModalVisible: false
    };
  }

  static navigationOptions = {
    headerTitle: "New Reservation"
  };

  setArrivalDate = newDate => {
    this.setState({ arrivalDate: newDate });
  };

  setDepartureDate = newDate => {
    this.setState({ departureDate: newDate });
    console.log(newDate);
  };

  render() {
    return (
      <Container flex={1} padding={8}>
        <TextInput placeholder="name" />
        <TextInput placeholder="name" />
        <Button
          onPress={() => this.setState({ arrivalModalVisible: true })}
        >{`Arrival Date: ${format(
          this.state.arrivalDate,
          "MMM D, YYYY"
        )}`}</Button>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.arrivalModalVisible}
        >
          <Container margin={8} flex={1} justifyContent="flex-end">
            <Text>Set Arrival Date</Text>
            <DatePickerIOS
              date={this.state.arrivalDate}
              onDateChange={this.setArrivalDate}
            />
            <Button
              onPress={() => this.setState({ arrivalModalVisible: false })}
            >
              Set Arrival Date
            </Button>
          </Container>
        </Modal>

        <Button
          onPress={() => this.setState({ departureModalVisible: true })}
        >{`Departure Date: ${format(
          this.state.departureDate,
          "MMM D, YYYY"
        )}`}</Button>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.departureModalVisible}
        >
          <Container margin={8} flex={1} justifyContent="flex-end">
            <Text>Set Departure Date</Text>
            <DatePickerIOS
              date={this.state.departureDate}
              onDateChange={this.setDepartureDate}
            />
            <Button
              onPress={() => this.setState({ departureModalVisible: false })}
            >
              Set Departure Date
            </Button>
          </Container>
        </Modal>

        <Button>Book Reservation</Button>
      </Container>
    );
  }
}
