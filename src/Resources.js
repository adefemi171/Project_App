import React, {Component} from 'react';
import {ScrollView, TouchableHighlight, TouchableOpacity, Linking, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { colors, dimensions } from './theme'
import { Ionicons } from '@expo/vector-icons'

import ResourceHeader from './ResourceHeader'

export default class Resources extends Component {
  openMap = () => {
    Linking.openURL('https://goo.gl/maps/DNrmyCTQPDC5RkHc9')
      .catch((err) => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <ResourceHeader />
        <View style={styles.mapContainer}>
          <ScrollView>
           <TouchableOpacity style={styles.touchable}>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Ionicons name='musical-notes' size={24} color='white'/>
                </View>
               <Text style={styles.textStyle}>Audio</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.touchable}>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Ionicons name='videocam-sharp' size={24} color='white'/>
                </View>
               <Text style={styles.textStyle}>Videos</Text>
           </TouchableOpacity>
        
           <TouchableOpacity style={styles.touchable}>
                <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <Ionicons name='document' size={24} color='white'/>
                </View>
               <Text style={styles.textStyle}>Documents</Text>
           </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: dimensions.width - 40,
    height: 400,
    borderRadius: 5
  },
  addressContainer: {
    paddingVertical: 20
  },
  address: {
    color: colors.primaryText,
    fontSize: 18,
    marginBottom: 4,
  },
  addressHeading: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.highlight
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight
  },
  mapContainer: {
    flex: 1
  },
  mapView: {
    padding: 20
  },
  touchable: { 
    flexDirection: 'row', 
    flex: 1,
    width: '95%', 
    alignSelf: 'center', 
    height: 60, 
    backgroundColor: '#1a75ff',
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  textStyle: {
    color: 'white', 
    marginLeft: 20, 
    alignSelf: 'center', 
    fontSize: 18
  }
});
