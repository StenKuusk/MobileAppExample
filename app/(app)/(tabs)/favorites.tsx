import { View, FlatList, SafeAreaView} from "react-native";
import styles from "./favoritesStyle";
import Header from "@/components/Header";
import FavoriteItem from "@/components/FavoriteItem";
import { products } from "@/utils/data";
import { router } from "expo-router";
export default function Favorites() {

    const renderItem = ({item}: {item: any}) => {
        const handlePress = () => {
            router.push({
                pathname: '/(app)/(tabs)/productDetails',
                params: { id: item.id }
            });
        }
        return (
            <FavoriteItem item={item} onPress={handlePress} />
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favorites" showBack />
            <FlatList 
                data={products} 
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
        </SafeAreaView>
    )
} 