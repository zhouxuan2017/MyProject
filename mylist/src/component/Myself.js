import React, { Component, useState } from 'react'
import { Text, View, Dimensions, ScrollView, StatusBar,StyleSheet, Image, FlatList, Button, TouchableOpacity, AsyncStorage } from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
const { width, scale, height } = Dimensions.get('window');
const s = width / 730;
const data1 = [
    { icon: 'setting', title: '账户管理' },
    { icon: 'environment', title: '收货地址' },
    { icon: 'idcard', title: '我的信息' },
    { icon: 'container', title: '我的订单' },
    { icon: 'qrcode', title: '我的二维码' },
    { icon: 'hdd', title: '我的积分' },
    { icon: 'star', title: '我的收藏' }
]
const data2 = [
    { icon: 'tool', title: '居家维修保养', key: 'fabu' },
    { icon: 'car', title: '出行接送', key: 'fabu' },
    { icon: 'user', title: '我的受赠人', key: 'fabu' },
    { icon: 'box-plot', title: '我的住宿优惠', key: 'fabu' },
    { icon: 'flag', title: '我的活动', key: 'fabu' },
    { icon: 'form', title: '我的发布', key: 'fabu' }
]
//拍照
const options = {
    title: '请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    customButtons: [],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Myself extends Component {
    constructor() {
        super()
        this.state = {
            //拍照
            imageUrl:''          
        }
    }
    componentDidMount(){
        //页面一加载获取数据进行渲染
        AsyncStorage.getItem("UID123", (err, result) => {
            const source={uri:''}
            source.uri=JSON.parse(result)
           if(source=='')
           {this.setState({imageUrl:''})}
           else
           {this.setState({imageUrl:source})
           }
          });
    }
    componentDidUpdate(){
       //页面更新获取数据进行渲染
       AsyncStorage.getItem("UID123", (err, result) => {
        const source={uri:''}
        source.uri=JSON.parse(result)
       if(source=='')
       {this.setState({imageUrl:''})}
       else
       {this.setState({imageUrl:source})
       }
      });
    }
    //拍照
    takephoto = () => {
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
                },async()=>{
                    AsyncStorage.setItem("UID123", JSON.stringify(this.state.imageUrl.uri), () => {
                        AsyncStorage.mergeItem("UID123", JSON.stringify(this.state.imageUrl.uri), () => {
                        });
                })
            })
        }      
        });
    }

    //点击退出登录时跳转到登录页面
    restart=async()=>{
       await AsyncStorage.removeItem('user');
        Actions.login()
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    {/* 状态栏 */}
                    <StatusBar backgroundColor='red'></StatusBar>
                    {/* 头像 */}
                    <View style={styles.header}>
                        <View><TouchableOpacity onPress={() => this.takephoto()}><Image style={styles.img} source={this.state.imageUrl} ></Image></TouchableOpacity></View>
                        <View><Text style={{ color: 'white', marginTop: 10 }}>BINNU DHILLON</Text></View>
                    </View>
                    {/* 个人中心 */}
                    <View style={styles.box}>
                        <Icon name='aliwangwang'></Icon>
                        <Text style={{ marginLeft: 20 * s }}>我的个人中心</Text>
                    </View>
                    {/* 个人中心列表 */}
                    <View style={styles.box1}>
                        <FlatList
                            numColumns={3}
                            data={data1}
                            renderItem={({ item }) => (
                                <View style={styles.person}>
                                    <Icon name={item.icon}></Icon>
                                    <Text style={{ marginTop: 3, color: '#4f4e4e' }}>{item.title}</Text>
                                </View>
                            )}
                        >
                        </FlatList>
                    </View>
                    {/* E族活动 */}
                    <View style={styles.box2}>
                        <Icon name='tag'></Icon>
                        <Text style={{ marginLeft: 20 * s }}>E族活动</Text>
                    </View>
                    {/* E族活动列表 */}
                    <View style={styles.box3}>
                        <FlatList
                            numColumns={3}
                            data={data2}
                            renderItem={({ item }) => (
                                <View style={styles.huodong}>
                                    <Icon name={item.icon} onPress={() => Actions[item.key].call()}></Icon>
                                    <Text style={{ marginTop: 3, color: '#4f4e4e' }} onPress={() => Actions[item.key].call()}>{item.title}</Text>
                                </View>
                            )}
                        >
                        </FlatList>
                    </View>
                    {/* 退出 */}
                    <View style={styles.box4}><TouchableOpacity onPress={this.restart}><Text style={{ color: '#f57f6a' }}>BINNU DHILLON  |  退出</Text></TouchableOpacity></View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 310 * s,
        width: '100%',
        backgroundColor: '#f23030',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200 * s,
        height: 200 * s,
        borderRadius: 100 * s,
        backgroundColor: 'white'
    },
    box: {
        height: 73 * s,
        width: '100%',
        fontSize: 18,
        paddingLeft: 20 * s,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    box1: {
        height: 360 * s,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 1
    },
    person: {
        width: width * 0.32,
        alignItems: 'center',
        justifyContent: 'center',
        height: 117 * s,
    },
    box2: {
        height: 73 * s,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20 * s,
        flexDirection: 'row',
        alignItems: 'center'
    },

    box3: {
        height: 220 * s,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 1,
        paddingLeft: 20 * s
    },
    huodong: {

        width: width * 0.32,
        alignItems: 'center',
        justifyContent: 'center',
        height: 103 * s,

    },
    box4: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120 * s,

    }
})
