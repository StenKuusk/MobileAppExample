import { FlatList, Image, View, Dimensions } from "react-native";
import styles from "./style";
import { useState, useRef } from "react";

const { width } = Dimensions.get('window');

const ImageCarusel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: {item: string}) => {
    return (
      <Image source={{uri: item}} style={styles.image} />
    )
  }

  const handleScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const width = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(offsetX / width);
    setActiveIndex(index);
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        style={styles.list}
        data={images}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.pagginationLine,
              index === activeIndex && styles.activeLine
            ]} 
          />
        ))}
      </View>
    </View>
  )
}

export default ImageCarusel;