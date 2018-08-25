// @flow

import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  fontSize: number,
  color: string,
  fontWeight: string
};

export class TitleText extends React.PureComponent<Props> {
  render() {
    const styles = StyleSheet.create({
      titleText: {
        fontSize: this.props.fontSize,
        color: this.props.color,
        fontWeight: this.props.fontWeight
      }
    });

    return (
      <Text {...this.props} style={styles.titleText}>
        {this.props.children}
      </Text>
    );
  }
}

export class BodyText extends React.PureComponent<Props> {
  render() {
    const styles = StyleSheet.create({
      titleText: {
        fontSize: this.props.fontSize,
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        textAlign: this.props.textAlign
      }
    });

    return (
      <Text {...this.props} style={styles.titleText}>
        {this.props.children}
      </Text>
    );
  }
}

BodyText.defaultProps = {
  fontSize: 14,
  color: "rgba(0,0,0,.87)",
  fontWeight: "400"
};

TitleText.defaultProps = {
  fontSize: 16,
  color: "rgba(0,0,0,.87)",
  fontWeight: "600"
};
