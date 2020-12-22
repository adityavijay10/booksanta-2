import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

export default class MyHeader extends Component{
  constructor(props){
      super(props)
      this.state={
        value:''
      }
  }
  render(){ 
    return (
            <Header
            leftComponent={<Icon name="bars"
              type="font-awesome"
              color="#696969"
              onPress={()=>{
                //props.navigation.toggleDrawer()
                this.props.navigation.toggleDrawer()
                //navigation.toggleDrawer();
              }}
              />}
              centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
              rightComponent={<Icon name="bell"
              type="font-awesome"
              color="#696969"
              onPress={()=>{
                this.props.navigation.navigate("MyDonations")
              
              }}
              />}
              
              backgroundColor = "#eaf8fe"
            />
          );  
  }
};


