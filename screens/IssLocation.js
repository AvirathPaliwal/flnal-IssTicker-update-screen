import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class IssLocationScreen extends Component{
    render(){
        return(
            <View>
               <Text>IssLocation Screen </Text>

            </View>
        )
    }
}




// import React, { Component } from 'react';
// import {
//     Text,
//     Alert,
//     View,
//     StyleSheet,
//     SafeAreaView,
//     TouchableOpacity,
//     Platform,
//     StatusBar,
//     Image,
//     ImageBackground,
// } from 'react-native';

// import MapView, { Marker } from 'react-native-maps';

// import axios from 'axios';
// import IssInfoScreen from './IssInfo'

// export default class IssLocationScreen extends Component {
//     constructor() {
//         super();
//         this.state = {
//             location: {},
//         }
//     }

//     getIssLocation = () => {
//         axios
//             .get("https://api.wheretheiss.at/v1/satellites/25544")
//             .then((response) => {
//                 this.setState({ location: response.data })
//                 console.log(response.data)
//             })
//             .catch((error) => {
//                 Alert.alert(error.message);
//             })
//     }

//     componentDidMount() {
//         this.getIssLocation();
//     }


//     render() {

//         if (Object.keys(this.state.location).length === 0) {
//             return (
//                 <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                     <Text> Loading .....</Text>
//                 </View>
//             )
//         }
//         else {
//             return (
//                 <View style={styles.container}>
//                     <SafeAreaView style={styles.droidSafeArea} />
//                     <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>
//                         <View style={styles.titleBar}>
//                             <Text style={styles.titleText}>ISS TRACKER APP</Text>
//                         </View>
//                         <View style={styles.mapContainer}>
//                             <MapView style={styles.map}
//                                 region={{
//                                     latitude: this.state.location.latitude,
//                                     longitude: this.state.location.longitude,
//                                     latitudeDelta: 100,
//                                     longitudeDelta: 100,
//                                 }}>
//                                 <Marker coordinate={{
//                                     latitude: this.state.location.latitude,
//                                     longitude: this.state.location.longitude,
//                                 }}>
//                                     <Image 
//                                     source={require('../assets/iss_icon.png')} 
//                                     style={{ width: 50, height: 50 }} />
//                                 </Marker>
//                             </MapView>
//                         </View>
//                         <IssInfoScreen/>
//                     </ImageBackground>
//                 </View>
//             )
//         }

//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1

//     },
//     droidSafeArea: {
//         marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     },
//     titleBar: {
//         flex: 0.5,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     titleText: {
//         fontSize: 30,
//         color: 'red',
//         fontWeight: "bold",
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     mapContainer: {
//         flex: 0.6
//     },
//     map: {
//         width: '100%',
//         height: '100%'
//     }
// })