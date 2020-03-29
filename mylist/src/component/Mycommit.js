import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import Item from '@ant-design/react-native/lib/list/ListItem';
const { width, scale, height } = Dimensions.get('window');
const s = width / 730;
//已回复和未回复随机数
var arrayObj = new Array(10)
export default class Mycommit extends Component {
    constructor() {
        super();
        this.state = {
            //放置接口获得的数据
            data: [],
            //第几页
            page: 1,
        }
    }
    setda = () => {
        for (var i = 0; i < 10; i++) {
            let item = this.state.item;
            var num = parseInt(Math.random() * 2)
            if (num === 0) {
                arrayObj[i] = '已回复'
            }
            else {
                arrayObj[i] = '待回复'
            }
        }
    }
    componentDidMount() {
        //随机数设置
        this.setda()
        //请求接口  page为第几页
        let page = this.state.page
        fetch(`https://cnodejs.org/api/v1/topics/?page=${page}&limit=10`)
            .then((res) => res.json())
            .then((res) => { this.setState({data: res.data})
            })
    }
    componentDidUpdate() {
        //请求接口  page为第几页
        let page = this.state.page
        fetch(`https://cnodejs.org/api/v1/topics/?limit=10&page=${page}`)
            .then((res) => res.json())
            .then((res) => {this.setState({ data: res.data })})
    }
    //上一页
    less = () => {
        let page = this.state.page - 1;
        if (page == 0) {ToastAndroid.show('已经是第一页', ToastAndroid.SHORT)}
        else {this.setState({page: page})}
        this.setda()
    }
    //下一页增加页数函数
    add = () => {
        let page = this.state.page + 1;
        this.setState({page: page})
        this.setda()
    }
    render() {
        return (
            <ScrollView>
                <View >
                    {/* 获取到的接口数据渲染 */}
                    {
                        this.state.data.map((item, index) => (
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                <View style={styles.div1} ><Text numberOfLines={1} >{item.title ? (item.title.length > 15 ? item.title.substr(0, 14) + '...' : item.title) : ''}</Text></View>
                                <View style={styles.div2}><Text numberOfLines={1}>{item.create_at ? (item.create_at.length > 11 ? item.create_at.substr(0, 10) : item.create_at) : ''}</Text></View>
                                <View style={styles.div3} >{arrayObj[index] ? arrayObj[index] == '待回复' ? <Text style={{ color: 'red' }}>{arrayObj[index]}</Text> : <Text>{arrayObj[index]}</Text> : ''}</View>
                            </View>
                        ))
                    }
                    {/* 上一页下一页按钮实现 */}
                    <View style={styles.foot}>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={() => this.less()}>
                                <Text style={{ color: 'white' }}>上一页</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.txt}><Text>第{this.state.page}页</Text></View>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={() => this.add()}>
                                <Text style={{ color: 'white' }}>下一页</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    div1: {
        flex: 0.65,
        backgroundColor: 'white',
        height: 100 * s,
        marginTop: 1,
        justifyContent: 'center',
        fontSize: 13,
        paddingLeft: 4
    },
    div2: {
        flex: 0.2,
        backgroundColor: 'white',
        height: 100 * s,
        marginTop: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    div3: {
        flex: 0.15,
        backgroundColor: 'white',
        height: 100 * s,
        marginTop: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    foot: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row'
    },
    btn: {
        width: 250 * s,
        height: 80 * s,
        backgroundColor: '#f23030',
        borderRadius: 40 * s,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginLeft: 10
    },
    txt: {
        height: 80 * s,
        width: 170 * s,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

