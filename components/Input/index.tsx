import { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions, StyleProp, TextStyle, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Input = ({ label, placeholder, isPassword = false, value, options, onChangeText, keyboardType, multiline, style, type }: { label: string, placeholder: string, isPassword?: boolean, value?: string, options?: string[], onChangeText?: (text: string) => void, keyboardType?: KeyboardTypeOptions, multiline?: boolean, style?: StyleProp<TextStyle>, type?: 'picker' }) => {
    const [isPasswordVisable, setIsPasswrodVisable] = useState(false)
    const [isPickerOpen, setIsPickerOpen] = useState(false)
    const onEyePress = () => {
        setIsPasswrodVisable(!isPasswordVisable)
    }

    const onPickerPress = () => {
      setIsPickerOpen(!isPickerOpen)
    }

    const onOptionPress = (option: string) => {
      setIsPickerOpen(false)
      onChangeText?.(option)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'picker' ? (
        <TouchableOpacity style={styles.inputContainer} onPress={onPickerPress}>
          <Text style={[styles.input, style]}>{value || placeholder}</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisable} placeholder={placeholder} style={[styles.input, style]} value={value} onChangeText={onChangeText} keyboardType={keyboardType} multiline={multiline} />
            {
                isPassword ? (
                <TouchableOpacity onPress={onEyePress}>
                    <Image style={styles.eye} source={isPasswordVisable ? require("@/assets/images/eye_closed.png") : require("@/assets/images/eye.png")} />
                </TouchableOpacity>
                ) : null
            }
        </View>
      )}
      <Modal visible={isPickerOpen} transparent>
        <TouchableOpacity activeOpacity={1} onPress={onPickerPress} style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text>Select option</Text>
            {options?.map((option) => (
              <TouchableOpacity key={option} onPress={() => onOptionPress(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;