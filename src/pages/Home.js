import React, {Fragment, Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { SafeAreaView, StyleSheet,Animated, ScrollView, Image,View, Text, StatusBar,TouchableOpacity} from 'react-native';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase';
class ImageLoader extends Component {

  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return(
      <Animated.Image
      onLoad={this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              })
            }
          ]
        },
          this.props.style,
        ]}
        />
      )
  }
}
export default class Home extends Component {

    _call2(){
    	  firebase.auth().signOut();
          Actions.code()
	}
	mark(){
		Actions.mattendance()
	}
	alert(){
		alert('This feature coming on next update')
	}


	render(){
		return (
    		<SafeAreaView style={styles.container}>
      			<ScrollView >
					<View style={styles.container}>
  						<Text style={styles.logoText}>
                		Teacher DashBoard
                		</Text>  
  							<View style={styles.tile}>
  								<TouchableOpacity onPress={this.mark}> 
  									<ImageLoader
                					style={{width: 150, height: 120}}
                					source={require('../Images/tile1.png')}/>
								</TouchableOpacity> 
  								<TouchableOpacity onPress={this.alert}> 
         							<ImageLoader
					                style={{marginHorizontal: 20, width: 120, height: 120}}
					                source={require('../Images/tile2.png')}/>
  								</TouchableOpacity> 
 							 </View>
								<TouchableOpacity onPress={this.alert}> 
								  	<ImageLoader
								    style={{marginVertical: 20, width: 280, height: 100}}
								    source={require('../Images/tile3.png')}/>
								</TouchableOpacity> 
  							<View style={styles.tile}>
					            <TouchableOpacity onPress={this.alert}> 
						            <ImageLoader
						            style={{marginVertical: 1,  width: 120, height: 120}}
						            source={require('../Images/tile4.png')}/>
					            </TouchableOpacity> 
					            <TouchableOpacity onPress={this.alert}> 
					            	<ImageLoader
					                style={{marginVertical: 1, marginHorizontal: 20, width: 150, height: 120}}
					                source={require('../Images/title5.png')}/>
					            </TouchableOpacity> 
 							</View> 
  								<TouchableOpacity onPress={this._call2}> 
    								<ImageLoader
					                style={{marginVertical: 20,  width: 270, height: 80}}
					                source={require('../Images/tile6.png')}/>
            					</TouchableOpacity> 
 							</View>
     			</ScrollView>
    		</SafeAreaView>

		);
	}
}
const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
   backgroundColor: '#212121',
   alignItems :'center',
   justifyContent: 'center',
  
   
  },

   logoText : {
      marginVertical: 50,
      fontSize: 30,
      color : 'rgba(255, 255, 255, 0.7)'
    },

    tile: {

      flexDirection: 'row',
      alignItems :'center',
   justifyContent: 'center',
    },


 });

