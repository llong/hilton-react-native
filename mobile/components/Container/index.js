// @flow

import * as React from "react";
import { View } from "react-native";

type ContainerType = {
  padding?: number,
  margin?: number,
  paddingTop?: number,
  paddingRight?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number,
  flex?: number,
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string,
  alignSelf?: string,
  backgroundColor?: string,
  borderRadius?: number,
  position?: string,
  top?: number,
  bottom?: number,
  left?: number,
  right?: number,
  width?: number | string,
  height?: number | string,
  children?: any
};

export const Container = (props: ContainerType) => (
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
      alignItems: props.alignItems,
      alignSelf: props.alignSelf,
      backgroundColor: props.backgroundColor,
      borderRadius: props.borderRadius,
      position: props.position,
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
      width: props.width,
      height: props.height
    }}
  >
    {props.children}
  </View>
);
