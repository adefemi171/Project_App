import React from 'react'
import {
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native'

import { colors, logo } from './theme'

class ProfileHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Profile </Text>
        {/* <Image
          source={logo}
          resizeMode='contain'
          style={styles.logo}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 10,
    bottom: 7,
    width: 120,
    height: 35,
    color: 'white',
    fontSize: 20
    // alignItems: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: 88
  }
})

export default ProfileHeader