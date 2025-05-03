import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import styles from "./signupStyle";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Seperator from "@/components/Separator";
import { useState } from "react";
import Button from "@/components/Button";
import GoogleLogin from "@/components/GoogleLogin";
import { useAuth } from "@/utils/auth";

export default function Signup() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleBackPress = () => {
    router.back();
  };

  const handleSignUp = () => {
    signIn();
    router.replace('/(app)/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Sign Up" onBackPress={handleBackPress} />
        <Input label="Name" placeholder="John Doe"/>
        <Input label="Email" placeholder="some@one.com"/>
        <Input isPassword label="Password" placeholder="******"/>
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked}/>
          <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign Up" onPress={handleSignUp} />
        <Seperator text='Or sign up with' />
        <GoogleLogin />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/signin")}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 