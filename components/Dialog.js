import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
const Dialog = ({ message, title }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Dialog;

const styles = StyleSheet.create({});
