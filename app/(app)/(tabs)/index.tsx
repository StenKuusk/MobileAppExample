import { View, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";
import styles from "./indexStyle";
import Header from "@/components/Header";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import { categories, products } from "@/utils/data";
import { router } from "expo-router";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [keyword, setKeyword] = useState<string>("");

    const renderCategoriItem = (item: any) => {
        const isSelected = selectedCategory === item.id;
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item.id)}
                isSelected={isSelected}
                title={item.title}
                image={item.image}
            />
        )
    }

    const renderProductItem = (item: any) => {
        return (
            <ProductHomeItem {...item} 
                onPress={() => {
                    router.push({
                        pathname: '/(app)/(tabs)/productDetails',
                        params: { id: item.id }
                    });
                }}
            />
        )
    }

    const filteredProducts = products.filter(product => {
        if (selectedCategory) {
            return product.category === selectedCategory;
        }
        return true;
    }).filter(product => {
        if (keyword) {
            return product.title.toLowerCase().includes(keyword.toLowerCase());
        }
        return true;
    });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header title="Find All You Need" onSearchKeyword={setKeyword} keyword={keyword} showSearch/>
                <FlatList
                    style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({item}) => renderCategoriItem(item)}  
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
                <FlatList 
                    style={styles.list}
                    numColumns={2}
                    data={filteredProducts}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => renderProductItem(item)}
                    ListFooterComponent={<View style={{height: 450}} />}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                />
            </View>
        </SafeAreaView>
    )
} 