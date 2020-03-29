import React, { Component } from 'react'
import { StatusBar, View, Image,TouchableOpacity,FlatList,Text, Dimensions,StyleSheet, TextInput } from 'react-native'
import { Icon } from '@ant-design/react-native';

//真机上调试：
//adb  devices  注意不要开着模拟器
//npm start开着服务
//react-native run-android //npm run android,在模拟器或真机上装的是
//测试版本的安装包，不要每天装一次，以后只要执行npm start起服务即可，
//然后点开App,服务界面就会编译文件


//adb reverse tcp:8081 tcp:8081  服务会自动连上
//执行./gradlew  ，打包出一个签名好的可用于发布的版本的安装包，不用调试

//手机调试
//打开开发者选项
//测试  adb devices
//react-native  run-android
//拔掉数据线，再接入的时候，不用再装，还是执行npm start 同时还要执行
//adb reverse tcp:8081 tcp:8081
//点击App即可

const {width,scale} = Dimensions.get('window');
const s=width/640;
const goods=[
    {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'36.00',
     img:require('../image/pian.png')
     },
     {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'39.00',
     img:require('../image/shupian.png')
     },
     {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'36.00',
     img:require('../image/pian.png')
     },
     {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'88.00',
     img:require('../image/shupian.png')
     },
     {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'36.00',
     img:require('../image/pian.png')
     },
     {title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
     price:'36.00',
     img:require('../image/shupian.png')
     },
]

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
        tits:[]
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput placeholder='请输入商品名称' style={{width:490*s,height:50*s,padding:0,paddingLeft:10}}/>
                        <Icon name='search'></Icon>
                    </View>
                </View>
               <View style={styles.nav}>
                   <TouchableOpacity><Text>综合</Text></TouchableOpacity>
                   <TouchableOpacity><Text>销量</Text></TouchableOpacity>
                   <TouchableOpacity><Text>新品</Text></TouchableOpacity>
                   <TouchableOpacity><Text>价格</Text></TouchableOpacity>
                   <TouchableOpacity><Text>信用</Text></TouchableOpacity>
               </View>
              
               <FlatList style={{backgroundColor:'#F4F4F4'}} 
                data={goods}
                numColumns={2}
                renderItem={({item})=>(
                 <View style={styles.good}>
                     <Image
                     //保证最短的那边也可以给充满
                     resizeMode='contain'
                     
                     source={item.img}
                          style={{height:180*s,marginTop:60*s}}
                     ></Image>
                     <Text style={{marginTop:20}}>{item.title}</Text>
                <Text style={{width:'100%',color:'red'}}>{item.price}</Text>
                 </View>
                )}
                >

                </FlatList>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header:{
      height:70*s,
      borderBottomColor:'#E8E8E8',
      borderBottomWidth:1,
      justifyContent:'center',
      alignItems:'center',
    },
    search:{
       width:544*s,
       height:50*s,
       backgroundColor:'#EEEEEE',
       flexDirection:'row',
       alignItems:'center',
    },
    nav:{
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    good:{
   width:290*s,
   backgroundColor:'white',
   marginLeft:20*s,
   marginTop:20*s,
   paddingLeft:10,
   paddingRight:10,
   paddingBottom:20,
   alignItems:'center'
    }
})
