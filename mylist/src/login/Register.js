import React, { Component } from 'react'
import { View, Text, Image, TextInput, AsyncStorage, ToastAndroid, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import { Icon } from '@ant-design/react-native'
import NaviBar from 'react-native-pure-navigation-bar';
import { myFetch } from '../utils/util';
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            pas: '',
            isLoading: false,
            timer: 3
        }
    }
    //用户名输入即刻存储
    user = (e) => {
        this.setState({
            user: e
        })
    }
    //密码输入即刻存储
    pas = (e) => {
        this.setState({
            pas: e
        })
    }
    //点击注册后注册成功
    register = () => {
        //点击注册后进行延时显示提示区域
        this.setState({ isLoading: true })
       const timer=setInterval(() => {
            const a = this.state.timer - 1;
            //延时到达时间进行页面跳转
            if (a === 0) {
                clearInterval(timer)
                myFetch.post('/register', {
                    username: this.state.user,
                    pwd: this.state.pas
                }).then(res => {
                    this.setState({ isLoading: false })
                    ToastAndroid.showWithGravity(
                        "注册成功，请登录！",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                }).then(() => {
                    //每次进行注册初始设置时间都是3s
                    this.setState({ timer: 3 })
                    Actions.login()
                })
            }
            else {
                this.setState({ timer: a })
            }
        }, 1000);
    }
    render() {
        return (
            <ImageBackground source={require('../image/bg.jpg')} style={{ flex: 1 }}>
                <NaviBar title={'快速注册'} onLeft={() => Actions.login()} navigationBarStyle={{ backgroundColor: 'red' }} />
                <View style={{ flex: 1, justifyContent: 'center', zIndex: 1 }}>
                    <View style={styles.bg}>
                        <View style={{ alignItems: 'center', width: '80%', height: 300 }}>
                            <View style={{ width: '90%', height: 50, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ fontSize: 38, color: 'white', fontWeight: 'bolder' }}>Welcome</Text>
                            </View>
                            <View style={[styles.border, { marginTop: 16 }]}>
                                <Icon name='user' color='red'></Icon>
                                <TextInput placeholder='请输入用户名' onChangeText={this.user} style={{ fontSize: 18 }}></TextInput>
                            </View>
                            <View style={styles.border}>
                                <Icon name='phone' color='red'></Icon>
                                <TextInput placeholder='请输入手机号' style={{ fontSize: 18 }}></TextInput>
                            </View>
                            <View style={styles.border}>
                                <Icon name='key' color='red'></Icon>
                                <TextInput placeholder='请输入密码' onChangeText={this.pas} secureTextEntry={true} style={{ fontSize: 18 }}></TextInput>
                            </View>
                            <View style={styles.border}>
                                <Icon name='key' color='red'></Icon>
                                <TextInput placeholder='再次确认密码' secureTextEntry={true} style={{ fontSize: 18 }}></TextInput>
                            </View>
                        </View>

                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                            <View style={{ width: '80%', height: 40 }}>
                                <TouchableOpacity style={styles.user} onPress={this.register}>
                                    <Text>注册</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>
                {this.state.isLoading ?
                    <View style={styles.time}><Text style={{ color: 'black', fontSize: 30 }}>正在注册{this.state.timer}s </Text>
                    </View> : null}
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    bg: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    user: {
        height: 40,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border:
    {
        width: '90%',
        height: 45,
        marginTop: 5,
        borderColor: '#ccc',
        borderWidth: 2,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
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