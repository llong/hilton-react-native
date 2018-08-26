import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { format, distanceInWords } from "date-fns";
import { Mutation } from "react-apollo";

import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { TitleText, BodyText } from "../../components/Typography";

import { CANCEL_RESERVATION, FETCH_RESERVATIONS } from "../../queries";

const dateFormat = "MMM D";

export default class ReservationDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.name
    };
  };

  cancelReservation = () => {
    return (
      <Mutation mutation={CANCEL_RESERVATION}>
        {(removeReservation, { data }) => (
          <Button
            onPress={() => {
              removeReservation({
                variables: {
                  id: this.props.navigation.state.params.id
                },
                refetchQueries: [{ query: FETCH_RESERVATIONS }]
              });
              this.props.navigation.navigate("Home");
            }}
          >
            Cancel Reservation
          </Button>
        )}
      </Mutation>
    );
  };

  render() {
    const { arrivalDate, departureDate } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Container margin={8} marginTop={0}>
          <Container
            style={styles.card}
            paddingTop={16}
            paddingBottom={16}
            backgroundColor="#FFFFFF"
            borderRadius={4}
            flexDirection="row"
            marginBottom={8}
          >
            <View style={styles.cardSection}>
              <TitleText>Check In</TitleText>
              <BodyText>{format(arrivalDate, dateFormat)}</BodyText>
            </View>
            <View style={[styles.cardBorders, styles.cardSection]}>
              <TitleText>Check Out</TitleText>
              <BodyText>{format(departureDate, dateFormat)}</BodyText>
            </View>
            <View style={styles.cardSection}>
              <TitleText>Days</TitleText>
              <BodyText>{distanceInWords(arrivalDate, departureDate)}</BodyText>
            </View>
          </Container>
          {this.cancelReservation()}
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row"
  },
  cardBorders: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "rgba(0,0,0,.12)"
  },
  cardSection: {
    flex: 1,
    alignItems: "center"
  }
});
