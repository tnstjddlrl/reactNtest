import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  AppRegistry,
  Dimensions,
  Image
} from "react-native";

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    marginTop:51,
    height:300,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  viewStyle1: {
    backgroundColor : "#fff",
    flex: 1,
    width : 100,
    height : 50,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center'
},
cardview :{
  backgroundColor: '#fff'

},
etitle:{
  fontSize: 25,
  marginTop: 30,
  marginBottom: 5,
  fontWeight: 'bold',
  textAlign: 'center',
},
etitle2:{
  fontSize: 17,
  marginTop: 1,
  marginBottom: 30,
  fontWeight: '300',
  textAlign: 'center',
},
reviewc:{
  height:420,
  backgroundColor : "#ff0043",
},
reviewT:{
  fontSize: 23,
  marginTop: 35,
  marginBottom: 35,
  fontWeight: 'bold',
  textAlign: 'center',
  color:'white',
},
reviewCard:{
  backgroundColor: '#fff',
  height:250,
  width:200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginLeft: 10,
    marginRight: 10,
},image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},

})

const App = () =>{
  return(
    <View>
    <View>
    <HeadHeder></HeadHeder>
    </View>
    <View>
    <ScrollView>
      <Banner></Banner>
      <Mmenu></Mmenu>
      <EEvent></EEvent>
      <REview></REview>
      </ScrollView>
      </View>
      <View><Text>footer</Text></View>
    </View>
  )
}

const HeadHeder = () => {
    return (
      <View style={{ 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View> 
      
    );
};


const Banner = ()=>{
  return(
    <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
  );
}

const Mmenu = () =>{
  return(
    <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 전기 & 조명            
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 수도         
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 도배&장판
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 인테리어
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 샷시&창호
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                       #청소&철거
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        #보일러&배관
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        #건물외부
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                    #종합인테리어&리모델링
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                    #사다리차&중장비
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                    #부엌&싱크
                    </Text>
                </View>
            </ScrollView>
  )
}

const EEvent =() =>{
  return (
    <View style={styles.cardview}>
      <Text style={styles.etitle}>이벤트</Text>
      <Text style={styles.etitle2}>진행중인 이벤트를 확인해보세요!</Text>
      <ScrollView
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
          <View>
            <Image
            source={require('C:\plTest\e_banner01.jpg')}></Image>
          </View>

      </ScrollView>
    </View>
  )
}
const image = { uri: "https://reactjs.org/logo-og.png" };
const REview =()=>{
  return(
    <View style={styles.reviewc}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.reviewT}>실시간 리뷰</Text>
      <ScrollView
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd ={
                    () => {console.log('Scrolling is End')}
                }
            >
              <View style={styles.reviewCard}><Text>1</Text></View>
              <View style={styles.reviewCard}><Text>2</Text></View>
              <View style={styles.reviewCard}><Text>3</Text></View>
              <View style={styles.reviewCard}><Text>4</Text></View>
              <View style={styles.reviewCard}><Text>5</Text></View>
            </ScrollView>
            </ImageBackground>
    </View>
  )
}

export default App;