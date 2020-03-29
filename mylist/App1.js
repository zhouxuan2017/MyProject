
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Image} from 'react-native';
import { Icon } from '@ant-design/react-native'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#f4f4f4', height: '100%', width: '100%' }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', height: 84, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', width: '80%', backgroundColor: '#eeeeee', marginTop: 11, height: 51 }}>
              <TextInput placeholder='请输入商品名称' placeholderTextColor='#999999' style={{ fontSize: 20 }}></TextInput>
              <Image source={require('./image/search.png')} style={{ height: 28, width: 28, marginLeft: 170, marginTop: 13 }}></Image>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 55, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '80%', height: 50, marginBottom: 20 }}>
              <View><Text style={styles.size}>综合</Text></View>
              <View><Text style={styles.size}>销量</Text></View>
              <View><Text style={styles.size}>新品</Text></View>
              <View><Text style={styles.size}>价格</Text></View>
              <View><Text style={styles.size}>信用</Text></View>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: 20
          }} >
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/shupian_03.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/pian.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/shupian_03.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/pian.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/shupian_03.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
            <View style={styles.box}>
              <View style={styles.box1}><Image source={require('./image/pian.jpg')} ></Image></View>
              <View style={styles.box2}><Text style={styles.size1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
              <View style={styles.box3}><Text style={styles.size2}>36.00</Text></View>
            </View>
         

          </View>
       
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  size: {
    fontSize: 19,
    color: '#0b0929'
  },
  box: {
    width: 216,
    height: 350,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  box1:
  {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2:
  {
    marginTop: 40,
    height: 60,
  },
  box3: {
    height: 30,
  },
  size1: {
    fontSize: 18,
    color: '#747474'
  },
  size2: {
    color: 'red',
    marginLeft: 10,
    fontSize: 18
  }
});

export default App;
