import { Image } from 'expo-image';
import { Platform, StyleSheet,View,Text,Pressable,ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView>
     
    <View style={{height:800}}>
      <View style={styles.head} >
        <Text style={{fontSize:26,textAlign:"center",flexDirection:"column",fontWeight:400,marginBottom:30}}> A premium online store for sporter and their stylihsh choice</Text>
      </View>
       <View style={styles.image} >
           <View style={{flex:4,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
               <View style={{height:359,width:388,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"#E941411A"}}>
                  <Image source={require('../../assets/images/bifour_-removebg-preview.png')}   style={{ width: 200, height: 200, resizeMode: "contain" }}  ></Image>
               </View>
           </View>
           <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:26,textAlign:"center",flexDirection:"column",fontWeight:700,width:160}}>POWER BIKE SHOP</Text>
           </View>
       </View>
       <View style={styles.buttonarea} >
          <Pressable style={{width:340,height:61,backgroundColor:"#E94141",alignItems:"center",justifyContent:"center",borderRadius:30,}}  onPress={() => {
           
          }}>
          <Text style={{fontSize:24,color:"white"}}> Get Started</Text>
          </Pressable>
       </View>
       
     
    </View>
    
  
  
    </ScrollView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
          
    //     />
    //   }>
     
    // <View style={{height:800}}>
    //   <View style={styles.head} >
    //     <Text style={{fontSize:26,textAlign:"center",flexDirection:"column",fontWeight:400,marginBottom:30}}> A premium online store for sporter and their stylihsh choice</Text>
    //   </View>
    //    <View style={styles.image} >
    //        <View style={{flex:4,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    //            <View style={{height:359,width:388,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"#E941411A"}}>
    //               <Image source={require("@/assets/images")} ></Image>
    //            </View>
    //        </View>
    //        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    //           <Text style={{fontSize:26,textAlign:"center",flexDirection:"column",fontWeight:700,width:160}}>POWER BIKE SHOP</Text>
    //        </View>
    //    </View>
    //    <View style={styles.buttonarea} >
    //       <Pressable style={{width:340,height:61,backgroundColor:"#E94141",alignItems:"center",justifyContent:"center",borderRadius:30,}}  onPress={() => {
           
    //       }}>
    //       <Text style={{fontSize:24,color:"white"}}> Get Started</Text>
    //       </Pressable>
    //    </View>
       
     
    // </View>
    
  
  
    // </ParallaxScrollView>
  );
}

const styles= StyleSheet.create(
  {
    container:{
      backgroundColor:"black",
    },
    head:{
       backgroundColor:"white",
       justifyContent:"flex-end",
       flex:1
    },
    image:{
      flex:3,
      backgroundColor:"white",
      flexDirection:"column"
    },
     buttonarea:{
       backgroundColor:"white",
       justifyContent:"center",
       alignItems:"center",
       flex:1
    }
  }
)