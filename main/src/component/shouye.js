import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, StatusBar, TextInput, Text, ScrollView, Image, FlatList, Button, TouchableOpacity } from 'react-native'
import { Icon, Carousel } from '@ant-design/react-native'
const { width, height } = Dimensions.get('window');
const s = width / 640;
const list = [
    { img: require('.././image/01.jpg'), title: '居家维修保养', arrow: '>' },
    { img: require('.././image/02.jpg'), title: '住宿优惠', arrow: '>' },
    { img: require('.././image/03.jpg'), title: '出行接送', arrow: '>' },
    { img: require('.././image/04.jpg'), title: 'E族活动', arrow: '>' },
]
export default class shouye extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                    {/* 状态栏 */}
                    <StatusBar backgroundColor='red'></StatusBar>
                    {/* 搜索框头部 */}
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <Icon name='search' style={{ marginLeft: 5, color: 'white' }}></Icon>
                            <TextInput placeholder='请输入您要搜索的关键字' style={{ width: 490 * s, height: 50 * s, padding: 0, paddingLeft: 10 }} />
                        </View>
                        <View><Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text></View>
                        <View><Icon name='shopping-cart'></Icon></View>
                    </View>
                    {/* 轮播图 */}
                    <View style={{ height: 280 * s }}>
                        <Carousel autoplay infinite>
                            <View style={styles.lunbo}>
                                <Image style={styles.lunimg} source={require('../image/lunbo3.jpg')}></Image>
                            </View>
                            <View style={styles.lunbo}>
                                <Image style={styles.lunimg} source={require('../image/lunbo2.png')}></Image>
                            </View>
                            <View style={styles.lunbo}>
                                <Image style={styles.lunimg} source={require('../image/lunbo1.png')}></Image>
                            </View>
                        </Carousel>
                    </View>
                    {/* 列表 */}
                    <FlatList
                        data={list}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.list}>
                                    <Image source={item.img} style={styles.img}></Image>
                                    <Text>{item.title}</Text>
                                </View>
                                <View style={styles.test}><Text>{item.arrow}</Text></View>
                            </View>
                        )}
                    ></FlatList>
                    {/* 发布按钮 */}
                    <View style={{ alignItems: 'center', height: 100 * s, justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={styles.touch}
                        ><Text style={{ color: 'white' }}>发布需求</Text></TouchableOpacity>
                    </View>
                    {/* 版权所有 */}
                    <View style={{ height: 50 * s, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#808080' }}>©E族之家 版权所有</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 70 * s,
        backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    search: {
        width: 500 * s,
        height: 50 * s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25 * s,
        opacity: 0.8,
    },
    lunbo: {
        height: 280 * s
    },
    lunimg: {
        resizeMode: 'stretch',
        height: 280 * s,
        width: '100%'
    },
    list: {
        height: 128 * s,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderTopWidth: 4,
        borderColor: '#f5f5f5',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
    },
    img: {
        width: 100 * s,
        height: 30,
        resizeMode: 'contain'
    },
    test: {
        height: 128 * s,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderTopWidth: 4,
        borderColor: '#f5f5f5',
        flexDirection: 'row',
        width: '10%',
        alignItems: 'center',
    },
    touch: {
        width: width * 0.8,
        height: height * 0.06,
        backgroundColor: '#f23030',
        borderRadius: height * 0.06 * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
})
