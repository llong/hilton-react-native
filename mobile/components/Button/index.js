import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.styledButton}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  styledButton: {
    backgroundColor: "rgb(0,122,255)",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase"
  }
});
