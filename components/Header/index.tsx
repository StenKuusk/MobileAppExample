import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./style";
import { useState } from "react";
import Input from "../Input";

const Header = ({ title, onBackPress, onLogout, onSearchKeyword, keyword, showBack, showSearch, showLogout }: { title: string, onBackPress?: () => void, onLogout?: () => void, onSearchKeyword?: (keyword: string) => void, keyword?: string, showBack?: boolean, showSearch?: boolean, showLogout?: boolean }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearch = () => {
    setShowSearchInput(search => !search);
  }
  
  return (
    <View>
      <View style={styles.container}>
        { showBack ? (
          <TouchableOpacity onPress={onBackPress}>
          <Image style={styles.Icon} source={require("@/assets/images/back.png")} />
        </TouchableOpacity>
      ) : showSearch ? (
        <TouchableOpacity onPress={onSearch}>
          <Image style={styles.Icon} source={require("@/assets/images/Search.png")} />
        </TouchableOpacity>
      ) : <View style={styles.space} />
      }
      <Text style={styles.title}>{title}</Text>
      { showLogout ? (
        <TouchableOpacity onPress={onLogout}>
          <Image style={styles.Icon} source={require("@/assets/images/Logout.png")} />
        </TouchableOpacity>
      ) : <View style={styles.space} />
      }
    </View>
    { showSearchInput ? (
      <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type your keyword" label="Search" />
    ) : null}
    </View>
  );
};

export default Header;