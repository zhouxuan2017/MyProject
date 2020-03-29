import React, { Component } from 'react'
import { View, Text, Image, TextInput, AsyncStorage, ToastAndroid, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import { myFetch } from '../utils/util';

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isLoading: false,
            timer: 3
        }
    }

    //输入用户名进行记录
    userhandle = (text) => { this.setState({ username: text }) }

    //输入密码进行记录
    pwdhandle = (text) => { this.setState({ pwd: text }) }

    //点击登录后进行设置
    login = () => {
        //点击登录后进行延时显示提示区域
        this.setState({ isLoading: true })
        const timer = setInterval(() => {
            const a = this.state.timer - 1;
            //延时到达时间进行页面跳转
            if (a === 0) {
                clearInterval(timer)
                myFetch.get('/register').then(res => {
                    AsyncStorage.setItem('user', JSON.stringify(res.data))
                })
                    .then(() => {
                        Actions.home();
                        this.setState({ isLoading: false })
                        ToastAndroid.showWithGravity(
                            "登录成功！欢迎您！",
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER
                        );
                        //每次进行注册初始设置时间都是3s
                        this.setState({ timer: 3 })
                    })
            }
            else {
                this.setState({ timer: a })
            }
        }, 1000);
    }
    render() {
        return (
            <ImageBackground source={require('../image/bg1.jpg')} style={{ flex: 1 }}>
                <View style={styles.bg}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: '90%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 38, color: 'white', fontWeight: 'bolder' }}>Welcome</Text>
                        </View>
                        <View style={{ width: '80%', borderColor: '#ccc', borderWidth: 2, marginRight: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                            <Icon name='user' color='red'></Icon>
                            <TextInput placeholder='用户名' onChangeText={this.userhandle} style={{ fontSize: 18 }}></TextInput>
                        </View>
                        <View style={{ width: '80%', marginTop: 5, borderColor: '#ccc', borderWidth: 2, marginRight: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                            <Icon name='key' color='red'></Icon>
                            <TextInput onChangeText={this.pwdhandle} placeholder='密码' secureTextEntry={true} style={{ fontSize: 18 }}></TextInput>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 25, justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '30%', height: 40 }}>
                            <TouchableOpacity style={styles.user}
                                onPress={this.login}>
                                <Text>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '10%', height: 40 }}></View>
                        <View style={{ width: '30%', height: 40 }}>
                            <TouchableOpacity style={styles.user} onPress={() => Actions.zhuce()}>
                                <Text>注册</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                {this.state.isLoading ?
                    <View style={styles.time}><Text style={{ color: 'black', fontSize: 30 }}>正在登录{this.state.timer}s </Text>
                    </View> : null}
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center',
    },
    user: {
        height: 40,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        width: '100%',
        height: '100%',
        zIndex: 1000,
        backgroundColor: 'white',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute"
    }
})