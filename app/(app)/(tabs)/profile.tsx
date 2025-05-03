import { View, Text, SafeAreaView } from "react-native";
import styles from "./profileStyle";
import Header from "@/components/Header";
import { useAuth } from "@/utils/auth";
import ListItem from "@/components/ListItem";
import Button from "@/components/Button";
import { router } from "expo-router";

const x = Math.floor(Math.random() * 10);

export default function Profile() {
    const { signOut } = useAuth();

    const onSettingsPress = () => {
        router.push({
            pathname: '/(app)/(tabs)/settings',
        });
    }

    const onNewListingPress = () => {
        router.push({
            pathname: '/(app)/(tabs)/createListing',
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.content}>
                    <Header 
                        title="Profile" 
                        showBack
                        showLogout
                        onLogout={signOut}
                    />
                    <Text style={styles.name}>User Name</Text>
                    <Text style={styles.email}>User Email</Text>
                    <ListItem title="My Listings" subTitle={`You already have ${x} listings`} />
                    <ListItem title="Settings" subTitle="Account, FAQ, Contacts" onPress={onSettingsPress} />
                </View>
                <Button title="Add New Listing" onPress={onNewListingPress} />
            </View>
        </SafeAreaView>
    )
} 