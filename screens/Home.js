import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet, SafeAreaView, StatusBar, Platform, ImageBackground, TouchableOpacity, Image
} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS TRACKER APP</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCards}
                        onPress={() => {
                            this.props.navigation.navigate('IssLocation')
                        }}>
                        <Text style={styles.routeText}>ISS LOCATION</Text>
                        <Text style={styles.knowmore}>{'Know more --->'}</Text>
                        <Text style={styles.bgdigit}>1</Text>
                        <Image source={require('../assets/iss_icon.png')} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCards}
                        onPress={() => {
                            this.props.navigation.navigate('Meteors')
                        }}>
                        <Text style={styles.routeText}>METEORS</Text>
                        <Text style={styles.knowmore}>{'Know more --->'}</Text>
                        <Text style={styles.bgdigit}>2</Text>
                        <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCards}
                        onPress={() => {
                            this.props.navigation.navigate('Updates')
                        }}>
                        <Text style={styles.routeText}>UPDATES</Text>
                        <Text style={styles.knowmore}>{'Know more --->'}</Text>
                        <Text style={styles.bgdigit}>3</Text>
                        <Image source={require('../assets/rocket_icon2.png')} style={styles.iconImage} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>



        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        color: 'red',
        fontWeight: "bold",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    routeCards: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        color: 'black',
        fontSize: 10,
        fontWeight: "bold",
        paddingRight: 120
    },
    iconImage: {
        position: 'absolute',
        width: 190,
        height: 190,
        resizeMode: 'contain',
        right: -50,
        top: -90
    },
    knowmore: {
        color: "red",
        fontSize: 10,
        paddingRight: 120
    },
    bgdigit: {
        position: 'absolute',
        color: 'rgba(183,183,183,0.5)',
        fontSize: 100,
        right: 20,
        bottom: -15,
        zIndex: -1
    }

})