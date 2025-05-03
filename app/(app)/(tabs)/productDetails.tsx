import { View, Text, ScrollView, Image, SafeAreaView, Pressable, Linking } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { products } from '@/utils/data';
import styles from './productsDetailsStyle';
import Button from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import ImageCarusel from '@/components/ImageCarusel';
const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <SafeAreaView>
                <View>
                    <Text>Product not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleBack = () => {
        router.back();
    }

    const onConract = () => {
        let phone = 'real phone number';
        Linking.openURL(`tel:${phone}`);

        let email = 'real email'
        Linking.openURL(`mailto:${email}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {product?.images ? (
                    <ImageCarusel images={product.images} />
                ) : (
                    <Image source={{ uri: product?.image }} style={styles.image} />
                )}
              <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text> 
                <Text style={styles.price}>{product?.price}</Text>
              </View>
              <Pressable style={styles.backContainer} onPress={handleBack}>
                <Image source={require('@/assets/images/back.png')} style={styles.backIcon}/>
              </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Ionicons name="bookmark-outline" size={24}/>
                </Pressable>
                <Button onPress={onConract} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetails;
