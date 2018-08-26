// @flow

import React from "react";
import { format } from "date-fns";
import { Mutation } from "react-apollo";

import { TextInput } from "../../components/TextInput";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import { DateModal } from "./components/DateModal";

import { ADD_RESERVATION, FETCH_RESERVATIONS } from "../../queries";

type State = {
  name: string,
  hotelName: string,
  arrivalDate: Date,
  departureDate: Date,
  arrivalModalVisible: boolean,
  departureModalVisible: boolean
};

type Props = {
  navigation: Object
};

export default class NewReservationScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      hotelName: "",
      arrivalDate: new Date(),
      departureDate: new Date(),
      arrivalModalVisible: false,
      departureModalVisible: false
    };
  }

  static navigationOptions = {
    headerTitle: "New Reservation"
  };

  setArrivalDate = (newDate: Date) => {
    this.setState({ arrivalDate: newDate });
  };

  setDepartureDate = (newDate: Date) => {
    this.setState({ departureDate: newDate });
  };

  addReservation = () => (
    <Mutation mutation={ADD_RESERVATION}>
      {(addReservation, { data }) => (
        <Button
          onPress={() => {
            addReservation({
              variables: {
                name: this.state.name,
                hotelName: this.state.hotelName,
                arrivalDate: this.state.arrivalDate,
                departureDate: this.state.departureDate
              },
              refetchQueries: [{ query: FETCH_RESERVATIONS }]
            });
            const clearState = {
              name: "",
              hotelName: "",
              arrivalDate: new Date(),
              departureDate: new Date(),
              arrivalModalVisible: false,
              departureModalVisible: false
            };
            this.setState(clearState);
            this.props.navigation.navigate("Home");
          }}
        >
          Add Reservation
        </Button>
      )}
    </Mutation>
  );

  render() {
    const { name, hotelName, arrivalDate, departureDate } = this.state;
    return (
      <Container flex={1} padding={8}>
        <TextInput
          placeholder="Enter your name..."
          value={name}
          onChangeText={val => this.setState({ name: val })}
        />
        <TextInput
          placeholder="Enter hotel name..."
          value={hotelName}
          onChangeText={val => this.setState({ hotelName: val })}
        />
        <Button
          onPress={() => this.setState({ arrivalModalVisible: true })}
        >{`Arrival Date: ${format(arrivalDate, "MMM D, YYYY")}`}</Button>

        <DateModal
          modalVisible={this.state.arrivalModalVisible}
          title="Set Arrival Date"
          date={this.state.arrivalDate}
          onDateChange={newDate => this.setState({ arrivalDate: newDate })}
          closeModal={() => this.setState({ arrivalModalVisible: false })}
          buttonLabel="Set Arrival Date"
        />

        <Button
          onPress={() => this.setState({ departureModalVisible: true })}
        >{`Departure Date: ${format(departureDate, "MMM D, YYYY")}`}</Button>

        <DateModal
          modalVisible={this.state.departureModalVisible}
          title="Set Departure Date"
          date={this.state.departureDate}
          onDateChange={newDate => this.setState({ departureDate: newDate })}
          closeModal={() => this.setState({ departureModalVisible: false })}
          buttonLabel="Set Departure Date"
        />

        {this.addReservation()}
      </Container>
    );
  }
}
