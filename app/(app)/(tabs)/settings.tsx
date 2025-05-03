import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./settingsStyle";
import EditableBox from "@/components/EditableBox";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/utils/colour";
import { useState } from "react";
import Button from "@/components/Button";
const Settings = () => {
  const [isEditing, setEditing] = useState(false);
  const [values, setValues] = useState({
    name: 'User Name',
    email: 'User Emaul',
  });

  const onChangeText = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  }

  const onEditPress = () => {
    setEditing(true);
  }

  const onSavePress = () => {
    setEditing(false);
  }

  const onItemPress = () => {
    console.log('item pressed');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" showBack />
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle} >Personal Information</Text>
          <Ionicons name="pencil-outline" size={32} color={colors.grey} onPress={onEditPress} />
        </View>
        <EditableBox label="Name" value={values.name} onChangeText={(value) => onChangeText('name', value)} editable={isEditing} />
        <EditableBox label="Email" value={values.email} onChangeText={(value) => onChangeText('email', value)} editable={isEditing} />
        {isEditing ? (<Button style={styles.saveButton} title="Save" onPress={onSavePress} />) : null}
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
        <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
      </View>
    </SafeAreaView>
  )
}

export default Settings;