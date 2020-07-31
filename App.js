import React from "react";
import {View,StyleSheet,Image,FlatList,ActivityIndicator} from "react-native";
import { Text, Card, CardItem } from 'native-base';


export default class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    this.state = {
      dataSource :[], 
    }
  }

  componentDidMount()
  { 
    this.apiCall();
  }
 async apiCall()
  {
    let response = await fetch("https://randomuser.me/api/?results=5")
    let responJSon = await response.json()
    console.warn(responJSon);
    this.setState({dataSource:responJSon.results})
  }


  
  render(){

    return( 
    <View style={styles.container}>
    <FlatList
    data={this.state.dataSource}
    renderItem={({item})=>
    <Card>
    <CardItem>
      <View style={styles.imagview}>
        <Image
        style={styles.profilepic}
        source={{
          uri:item.picture.medium 
        }}
        />
        <View style={styles.userinfo}>
          <Text style={styles.usertxt}>
         Name : {item.name.title} {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.usertxt}>
         Email : {item.email}
          </Text>
          <Text style={styles.usertxt}>
         City : {item.location.city}
          </Text>
          <Text style={styles.usertxt}>
         Mobile : {item.phone}
          </Text>
        </View>
        
      </View>
    </CardItem>
  </Card>
  
  }
    />
    </View>
    );
  }

}
const styles = StyleSheet.create({
  imagview: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  profilepic:{
    flex:2,
    height:100,
    width:100,
    marginEnd:10


  },
  userinfo:{
    flex:5,
    flexDirection:"column",
    marginStart:25

  },
  usertxt:{
    padding:10

  }
});
