import React from "react";
import { View, Text, StyleSheet } from "react-native";

export class ListItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.primaryText}>{this.props.primaryText}</Text>
          <Text style={styles.secondaryText}>{this.props.secondaryText}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.secondaryText}>{this.props.rightText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  },
  primaryText: {
    fontSize: 16,
    color: "rgba(0,0,0,.87)",
    fontWeight: "600"
  },
  secondaryText: {
    fontSize: 14,
    color: "rgba(0,0,0,.54)"
  }
});
