import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from "react";

import { StyleSheet, View,FlatList,ScrollView, ActivityIndicator,Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Card, CardItem } from 'native-base';export default function App() {
  
  
  const [post, setPostArray] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() =>
   {

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(json => {
     // console.log(json);
     setisLoading(false);
      setPostArray([json]);
  })
},[])

console.log(post)
if(isLoading)
{
  return (
<View>
  <ActivityIndicator size="large" color="#01CBC6"/>

</View>
  
  );
  
}

return (
  <View style={styles.container}>
    <Text>anuj</Text>
    <FlatList
    data={post}
    renderItem={(itemdata)=>{
      <Card>
        <CardItem>
          <View style={styles.imagview}>
            {/* <Image
            style={styles.profilepic}
            source={{
              uri:item.picture.large 
            }}
            /> */}
            <View style={styles.userinfo}>
              {/* <Text style={styles.usertxt}>
             Name : {item.name.title} {item.name.first} {item.name.last}
              </Text> */}
              <Text style={styles.usertxt}>
             Anuj : {itemdata.item.email}
              </Text>
            </View>
            
          </View>
        </CardItem>
      </Card>
    }}

    >

    </FlatList>

  
  </View>
    
    );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20

  },
  imagview:{
    padding:20
  },
  profilepic:{
    flex:2,


  },
  userinfo:{

  },
  usertxt:{

  }
});
