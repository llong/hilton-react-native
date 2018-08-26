// @flow

import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  children: string | React.Element<any>
};

export class Button extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.styledButton}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export class PrimaryButton extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.styledButton, styles.primaryButton]}
      >
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  styledButton: {
    backgroundColor: "rgba(0,0,0,.37)",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  primaryButton: {
    backgroundColor: "rgb(0,122,255)"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase"
  }
});
