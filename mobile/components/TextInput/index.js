import React from "react";
import { StyleSheet, TextInput as Input } from "react-native";

export class TextInput extends React.PureComponent {
  render() {
    return <Input {...this.props} style={styles.styledInput} />;
  }
}

const styles = StyleSheet.create({
  styledInput: {
    backgroundColor: "#FFFFFF",
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 4
  }
});
