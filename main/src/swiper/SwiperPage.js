import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper';
export default class SwiperPage extends Component {
    start=async()=>{
       await AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        })
    }
    render() {
      
        return (
            <Swiper showsButtons={false} loop={false}>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require('../image/slide1.png')}></Image>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require('../image/slide2.png')}></Image>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require('../image/slide3.png')}></Image>
                    <TouchableOpacity style={styles.start} onPress={this.start}><Text style={{color:'#fff',fontSize:18}}>开始体验</Text></TouchableOpacity>
                </View>
            </Swiper>

        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },
    start: {
        bottom: 150,
        width: 140,
        height: 50,
        justifyContent:'center',
        textAlignVertical: 'center',
        backgroundColor: '#4876FF',
        borderRadius: 10,
        alignItems:'center'
    },
    slide: {
        flex: 1,
        height: '100%',
        alignItems: 'center'
    },
})