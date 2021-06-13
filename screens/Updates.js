import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity, FlatList, Platform, StatusBar ,SafeAreaView,ImageBackground,Image} from 'react-native'
import axios from 'axios'

export default class UpdateScreen extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            blogs: [],
            reports: [],

        }
    }

    componentDidMount() {
        this.getArticles();
    }
    getArticles = () => {
        axios
            .get('https://spaceflightnewsapi.net/api/v2/articles')
            .then(response => {
                this.setState({
                    articles: response.data
                })
                this.getReports();
            })
            .catch((error) => {
                Alert.alert('error message');
            });
        //console.log(this.state.articles);

    }

    getReports = () => {
        axios
            .get('https://spaceflightnewsapi.net/api/v2/reports')
            .then((response) => {
                this.setState({
                    reports: response.data,
                });
                // console.log(this.state.reports)
                this.getBlogs();
            })
            .catch((error) => {
                Alert.alert(error.message);
            });
        //  console.log(this.state.reports)
    };

    getBlogs = () => {
        axios
            .get('https://spaceflightnewsapi.net/api/v2/blogs')
            .then((response) => {
                this.setState({
                    blogs: response.data,
                });
            })
            .catch((error) => {
                Alert.alert(error.message);
            });
        // console.log(  this.state.blogs)
    };
    addFlag = (arr, value) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].type = value
        }
        return arr
    }
    keyExtractor = (item, index) =>  index.toString(); 
    renderItem = ({ item }) => {
        let url
        if (item.type === 'Reports') {
            url = require('../assets/iss_icon.png')
        }
        else{
            url = require('../assets/blog_icon.png')
        }
        if (item.type === 'Article') {
            return (
                <TouchableOpacity style={styles.listContainer}
                    onPress={() => Linking.openURL(item.url).catch((err) =>
                        console.error('Could not load image')
                    )
                    }>
                    <Text style={styles.cardTitle}>
                        {item.title}
                    </Text>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{ height: 100, width: '100%' }}
                        />
                    </View>
                </TouchableOpacity>)
        }
        else {
            <TouchableOpacity style={styles.listContainer}
                onPress={() => Linking.openUrl(item.url).catch((err) =>
                    console.error('Could not load image')
                )
                }>
                <Text style={styles.cardTitle}>
                    {item.title}
                </Text>
                <View style={styles.iconContainer}>
                    <Image
                        source={url}
                        style={{ height: 50, width: 50 }}
                    />
                </View>
            </TouchableOpacity>

        }
    }
    render() {
        let articles = this.addFlag(this.state.articles, 'Article');
        let reports = this.addFlag(this.state.reports, "Reports");
        let blogs = this.addFlag(this.state.blogs, 'Blogs')
        let events = articles.concat(reports).concat(blogs)
        events=events.sort(function(a,b){
            return new Date(b.publishedAt)- new Date(a.publishedAt)
        })
        console.log(events)
        if (events.length === 0) {
            return (<View style={{ alignSelf: 'center', flex: 1 }}>
                <Text> Loading...</Text>
            </View>)

        }
        else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground
                        source={require('../assets/bg_updates.jpg')}
                        style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}> UpdateScreen !</Text>
                        </View>
                        <FlatList
                            data={events}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                        />

                    </ImageBackground>
                </View>

            )
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        padding: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
})