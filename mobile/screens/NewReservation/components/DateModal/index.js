// @flow

import React from "react";
import { Modal, DatePickerIOS } from "react-native";

type Props = {
  modalVisible: boolean,
  title: string,
  date: Date,
  onDateChange: () => void,
  closeModal: () => void,
  buttonLabel: string
};

import { Container } from "../../../../components/Container";
import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typography";

export class DateModal extends React.PureComponent<Props> {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
      >
        <Container
          margin={8}
          padding={8}
          justifyContent="flex-end"
          backgroundColor="#FFFFFF"
          position="absolute"
          bottom={-8}
          left={-8}
          width="100%"
        >
          <TitleText textAlign="center">{this.props.title}</TitleText>
          <DatePickerIOS
            date={this.props.date}
            onDateChange={this.props.onDateChange}
            mode="date"
          />
          <Button onPress={this.props.closeModal}>
            {this.props.buttonLabel}
          </Button>
        </Container>
      </Modal>
    );
  }
}
