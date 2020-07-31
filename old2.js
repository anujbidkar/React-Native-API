import React from "react";
import {View,Text,StyleSheet,Image,FlatList,ActivityIndicator} from "react-native";
import {Card,CardItem} from "native-base";

export default class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    this.state = {
      isLoading:true,
      dataSource :[]
    }
  }



  getUserFromApi = ()=>{
    return(
      fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(json => {
        console.log(responseJson);
        this.setState({
          isLoading:false,
          dataSource : this.state.dataSource.concat(json.results)
        })
      })
      .catch(error=>console.log(error))
    )
  }
_keyExtractor = (dataSource,index)=>dataSource.email;
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(json => {
      //  console.log(json.results);
      this.setState({
        isLoading:false,
        dataSource : json.results
      })
    })
    .catch(error=>console.log(error)) 
  }
  render(){

    if(this.state.isLoading)
    {
      return(
        <View>
          <ActivityIndicator size="small" color="#c1c1c1" />
        </View>
      )
    }

    return( 
    <View style={styles.container}>
                  <Text style={styles.textAnuj}>Anuj Bidkar</Text>

      <FlatList
      data={this.state.dataSource}
      keyExtractor={this._keyExtractor}
      renderItem={({item})=>{
        <Card>
          <CardItem>
            
      <Text style={styles.textAnuj}>{item.email}</Text>
          </CardItem>
        </Card>
      }}
      />
    </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#c1c1c1",
    alignItems:"center",
    justifyContent:"center",
    fontSize:60
  },
  textAnuj:{
    color:"red",
    fontSize:30
  }
})