import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import styles from "./signinStyle";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Seperator from "@/components/Separator";
import Button from "@/components/Button";
import GoogleLogin from "@/components/GoogleLogin";
import { useAuth } from "@/utils/auth";

export default function Signin() {
  const router = useRouter();
  const { signIn } = useAuth();

  const handleBackPress = () => {
    router.back();
  };

  const handleSignIn = () => {
    signIn();
    router.replace('/(app)/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Sign In" onBackPress={handleBackPress} />
        <Input label="Email" placeholder="some@one.com"/>
        <Input isPassword label="Password" placeholder="******"/>
        <Button style={styles.button} title="Sign In" onPress={handleSignIn} />
        <Seperator text='Or sign up with' />
        <GoogleLogin />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 