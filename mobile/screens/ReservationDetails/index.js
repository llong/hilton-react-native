import React from "react";
import { View, StyleSheet } from "react-native";
import { format, distanceInWords } from "date-fns";

import { Container } from "../../components/Container";
import { TitleText, BodyText } from "../../components/Typography";

const dateFormat = "MMM D";

export default class ReservationDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.name
    };
  };

  render() {
    const { arrivalDate, departureDate } = this.props.navigation.state.params;
    return (
      <Container
        style={styles.test}
        margin={8}
        paddingTop={16}
        paddingBottom={16}
        backgroundColor="#FFFFFF"
        borderRadius={4}
        flexDirection="row"
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
    );
  }
}

const styles = StyleSheet.create({
  test: {
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
