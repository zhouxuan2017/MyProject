import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker';
import {View,Image,Button} from 'react-native'
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
 
export default class Paizhao extends Component {
    constructor(){
        super()
        this.state={
            imageUrl:''
        }
    }
   takephoto=()=>{
    ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          return;
        } else if (response.error) {
          console.log('Error:', response.error);
        } else if (response.customButton) {
          console.log('custom:', response.customButton);
        } else {
            
          const source = { uri: response.uri };
          this.setState({
            imageUrl: source,
          });
        }
      });
   }
    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                    <Button title='拍照' style={{width:200,height:200}} onPress={()=>this.takephoto()}></Button> 

  <Image source={this.state.imageUrl} style={{width:300,height:300}}></Image>
            </View>
        )
    }
}
