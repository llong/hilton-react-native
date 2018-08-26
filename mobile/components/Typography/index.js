// @flow

import * as React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  fontSize?: number,
  color?: string,
  fontWeight?: any,
  children?: string | React.Element<any>
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
        fontWeight: this.props.fontWeight
      }
    });

    return (
      <Text {...this.props} style={styles.titleText}>
        {this.props.children}
      </Text>
    );
  }

  static defaultProps = {
    BodyText: {
      fontSize: 14,
      color: "rgba(0,0,0,.87)",
      fontWeight: "400"
    },
    TitleText: {
      fontSize: 16,
      color: "rgba(0,0,0,.87)",
      fontWeight: "600"
    }
  };
}
