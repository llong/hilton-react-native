import React from "react";
import { View } from "react-native";

export const Container = props => (
  <View
    style={{
      padding: props.padding,
      margin: props.margin,
      paddingTop: props.paddingTop,
      paddingRight: props.paddingRight,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
      marginTop: props.paddingTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      flex: props.flex,
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems
    }}
  >
    {props.children}
  </View>
);
