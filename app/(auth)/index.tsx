import { Text, View, Image, SafeAreaView } from 'react-native';
import styles from './indexStyle';
import { router } from 'expo-router';
import Button from '@/components/Button';
import { colors } from '@/utils/colour';

export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require('@/assets/images/splash-image.png')} style={styles.image}/>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button title="Sign In" onPress={() => router.push('/(auth)/signin')} />
                <Button style={styles.signUpButton} color={colors.blue} title="Sign Up" onPress={() => router.push('/(auth)/signup')} />
            </View>
        </SafeAreaView>
    )
}
