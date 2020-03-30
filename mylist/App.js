import React, { useState, useEffect } from 'react';
import { View, Text, Image, AsyncStorage, ToastAndroid ,BackHandler} from 'react-native'
import { Router, Scene, Tabs, Actions, Lightbox, Drawer, Overlay, Modal } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import shouye from './src/component/shouye';
import Fenlei from './src/component/list'
import Myself from './src/component/Myself';
import Mycommit from './src/component/Mycommit';

import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './src/swiper/SwiperPage';
import login from './src/login/Login';
import Register from './src/login/Register';

console.disableYellowBox = true

const App = () => {
  let now = 0;
  //是否已经登陆过
  let [isLogin, setLogin] = useState(false);

  //是否点击了开始体验设置初值
  let [isInstall, setInstall] = useState(true);
  useEffect(() => {
    //看看是否本地有存储的已经点击过开始体验软件
    AsyncStorage.getItem('isInstall')
      .then(res => {
        if (res) {
          setInstall(false)
        }
      })
    // AsyncStorage.removeItem('user')
    //查看是否已经点击过登录，如果点击过下次进来直接进首页
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        console.log(user)
        if (!user) {
          SplashScreen.hide()
        }
        if (user) {
          setLogin(true)
          SplashScreen.hide();
        }
      })
  }, [])

  let afterInstall = () => {
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }
  return (
    <Router
    backAndroidHandler={()=>{
     
      if(Actions.currentScene == 'login')
      {
       
        Actions.reset('login')
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      else{
        if(Actions.currentScene == 'shoye'){
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }
       Actions.pop();
       return true;    
      }
    }}
    >

      <Overlay>
        <Modal key='modal' hideNavBar>
          <Lightbox key='lightbox'>
            <Drawer
              key="drawer"
              contentComponent={() => <Text>drawer</Text>}
              drawerIcon={() => <Icon name="menu" />}
              drawerWidth={400}
            >
              <Scene key='root'
              >
                {/* 三个标签页 */}
                <Tabs
                  key='tabbar'
                  hideNavBar
                  activeTintColor='red'
                  inactiveTintColor='#949494'
                  tabBarStyle={{ backgroundColor: 'white' }}
                >
                  {/* 首页标签页 */}
                  <Scene title='首页' key='home'
                    icon={({ focused }) => <Icon color={focused ? 'red' : '#949494'} name="home" />}
                  >
                    <Scene hideNavBar component={shouye} key='shoye'
                    ></Scene>
                  </Scene>
                  {/* 分类标签页 */}
                  <Scene title='分类' key='fenlai'
                    icon={({ focused }) => <Icon color={focused ? 'red' : '#949494'} name='appstore'></Icon>}
                  >
                    <Scene hideNavBar component={Fenlei} key='fenlei1'></Scene>
                  </Scene>
                  {/* 个人中心标签页 */}
                  <Scene title='个人中心' key='my'
                    icon={({ focused }) => <Icon color={focused ? 'red' : '#949494'} name="user" />}>
                    <Scene hideNavBar component={Myself} key='my1'></Scene>
                    <Scene hideTabBar
                      key='fabu'
                      title='我的发布'
                      titleStyle={{ color: 'white', flex: 1, textAlign: 'center' }}
                      component={Mycommit}
                      renderRightButton={() => <Icon name='ellipsis' style={{ color: 'white' }}></Icon>}
                      backButtonImage={require('./src/image/arrow.png')}
                      navigationBarStyle={{ backgroundColor: 'red' }}
                    ></Scene>
                  
                  </Scene>
                </Tabs>
              </Scene>

            </Drawer>
          </Lightbox>
          <Scene initial={!isLogin} key='login' component={login}></Scene>
          <Scene key='zhuce' component={Register}

          ></Scene>
        </Modal>
      </Overlay>
    </Router>
  );
};
export default App;
