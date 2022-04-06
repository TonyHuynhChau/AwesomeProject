import React, { useState } from "react";
import {
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
    date: "8/3/2021",
    url: "https://kenh14cdn.com/2017/2-1510316761218.jpeg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
    date: "8/3/2021",
    url: "https://kenh14cdn.com/2017/2-1510316761218.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
    date: "8/3/2021",
    url: "https://kenh14cdn.com/2017/2-1510316761218.jpeg",
  },
];

fetch('http://192.168.1.28:3000/MonAn', {
      method: 'GET',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loder
        setLoading(false);
        console.log(responseJson);
        // If server reponse message same as Data matched
        if (responseJson.status === 'success') {
         AsyncStorage.setItem('_id', responseJson.data.idmonan);

          console.log(responseJson.data.userName);
          this.props.navigation.navigate('dangky');
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  
  

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View
      style={{
        height: 150,
        flex: 1,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
      <Image style={[styles.image]} source={item.url} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <View
          style={{ height: 2, backgroundColor: "black", marginHorizontal: 5 }}
        ></View>
        <Text style={[styles.date, textColor]}>Ngày đăng: {item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ListMan = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#C4C4C4" : "#E5E5E5";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 2,
    marginHorizontal: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
  },
});

export default ListMan;
