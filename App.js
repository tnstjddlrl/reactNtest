import React from "react";
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
  Image,
  Button
} from "react-native";
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    marginTop:30,
    height:200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  backgroundColor: '#fff',
  height:300,

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
  height:400,
  backgroundColor : "#ff0043",
  marginBottom:40,
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
  backgroundColor: '#e0e0eb',
  height:250,
  width:170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginLeft: 10,
    marginRight: 20,
},image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},
imagetest:{
  borderTopLeftRadius: 1,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:1,
  width:180,
  height:100,
},
eventList:{
  marginLeft:15,
  marginRight:2,
},
bannerimg:{
  width:400,
  height:180,
},
button:{
  color:'black',
}

})


const App =() =>{
  const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
  const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
  return(
    <View>
      <HeadHeder></HeadHeder>
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner></Banner>
        <Mmenu></Mmenu>
        <Company></Company>
         <EEvent></EEvent>
        <REview></REview>
        </ScrollView>
      </View>
      <View>
      <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',bottom:670,flexDirection: 'row',}}>
        <View style={{backgroundColor:'white'}}>
          <Image source={logo2} style={{width:35,height:35,margin:10}}>
          </Image>
        </View>
        <View style={{backgroundColor:'white'}}>
          <Image source={logo} style={{width:50,height:50,marginTop:10,marginLeft:130}}>
          </Image>
        </View>
        <View style={{backgroundColor:'white'}}>
          <Text style={{width:65,height:65,marginLeft:20,marginLeft:92}}>
            PnL Mail
          </Text>
        </View>
        

        </View>
      </View>
      </View>
        <FootTer></FootTer>

        
    </View>
  )
}

const logo = { uri: "https://pluslink.kr/img/pluslink/logo.png" };
const logo2 = { uri: "https://pluslink.kr/img/menu.png" };
const HeadHeder = () => {
  return (
    
    <View style={{ 
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      top:0,
    }}>
      
      <View style={{width: 50, height: 50, }}><ImageBackground source={logo2} style={{width: 30, height: 30,margin:10, position:'relative'}}></ImageBackground></View>
      <View style={{width: 50, height: 50, }}><ImageBackground source={logo} style={{width: 30, height: 30,margin:10, position:'relative'}}></ImageBackground></View>
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
    </View> 
   
  );
};

const ffimg =require('./b01.png')
const ffimg2 =require('./b02.png')
const ffimg3 =require('./b03.png')
const ffimg4 =require('./b04.png')
const FootTer = () => {
  return (
    <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',bottom:0,flexDirection: 'row',}}>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg} style={{width:65,height:65,marginLeft:20}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg2} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg3} style={{width:65,height:65,marginLeft:20,marginRight:10}}>
          </ImageBackground>
        </View>
        <View style={{backgroundColor:'white'}}>
          <ImageBackground source={ffimg4} style={{width:65,height:65,marginLeft:20,marginRight:40}}>
          </ImageBackground>
        </View>

        </View>
      </View>
    
   
  );
};


const Banimg =require('./banner.png')
const Banimg2 =require('./banner2.png')
const Banimg3 =require('./banner3.png')

const Banner = ()=>{
  return(
    <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg} style={styles.bannerimg}>
        </ImageBackground>
        </View>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg2} style={styles.bannerimg}>
        </ImageBackground>
        </View>
        <View style={styles.slide1}>
        <ImageBackground source={Banimg3} style={styles.bannerimg}>
        </ImageBackground>
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
                       # 청소&철거
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 보일러&배관
                    </Text>
                </View>
                <View style={styles.viewStyle1}>
                    <Text style = {styles.textStyle}>
                        # 건물외부
                    </Text>
                </View>
               
                
            </ScrollView>
  )
}

const Company=()=>{
  return(
    <View>
      <View style={{width:100,height:100, margin:10, backgroundColor:'#d1d1e0'}}>
        <Text>안녕</Text>
      </View>
    </View>
  )
}


const Eimg =require('./e_banner01.jpg')
const Eimg2 =require('./e_banner02.jpg')
const Eimg3 =require('./e_banner03.jpg')
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
              <View style={styles.eventList}>
                <Image source={Eimg} style={styles.imagetest}></Image>
                <Text style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
                </View>
                <View style={styles.eventList}>
                <Image source={Eimg2} style={styles.imagetest}></Image>
                <Text style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
                </View>
                <View style={styles.eventList}>
                <Image source={Eimg3} style={styles.imagetest}></Image>
                <Text style={{width:180}}>[여름맞이 이벤트]2020년 7~월 수도견적 5000원 할인</Text>
                </View>
          <View>
          </View>

      </ScrollView>
    </View>
  )
}
const image = { uri: "https://pluslink.kr/img/review_bg.jpg" };
const pinimg = require("./map_icon.png")
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
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
              <View style={styles.reviewCard}><ReviewText></ReviewText><Image source={pinimg} style={{position:'absolute',top:50,left:75}}></Image></View>
            </ScrollView>
            </ImageBackground>
    </View>
  )
}

const ReviewText=(prop)=>{
  return (
    <View style={{width:130,height:160,backgroundColor:"#fff",marginTop:60,marginLeft:20,marginRight:20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,}}>
      <Text style={{top:40,textAlign:'center'}}>테스트입니다.</Text>
      <Text numberOfLines={3} ellipsizeMode='tail' style={{top:60,margin:5,height:60,textAlign:'center',fontSize:12}}>테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.테스트 내용입니다.</Text>
    </View>
  )
}

const Test = () => {
  return(
    <View>
      <Image source={Eimg} style={styles.imagetest}></Image>
    </View>
  )
}


export default App;
