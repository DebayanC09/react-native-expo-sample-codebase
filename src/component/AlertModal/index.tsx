import React from "react";

import {Modal, Text, View} from "react-native";

import {AlertModalStyle} from "./style";

interface AlertModalProps {
  visible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}>
      <View style={AlertModalStyle.centeredView}>
        <View style={AlertModalStyle.modalView}>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <View style={AlertModalStyle.buttonContainer}>
            <Text onPress={onCancel}>{cancelText}</Text>
            <Text onPress={onConfirm}>{confirmText}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
