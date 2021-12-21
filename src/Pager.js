import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel'

import Talk from './Talk'
import Discussion from './Discussion'
import { colors, dimensions } from './theme'

export default class Pager extends Component {
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.name,
    headerTintColor: colors.highlight
  })

  state = {
    index: 0,
    entries: [0, 1]
  }

  updateIndex = (index) => {
    this._carousel.snapToItem(index)
  }

  onSnapToItem = (index) => {
    this.setState({ index })
  }

  _renderItem = ({index}) => {
    if (index === 0) return <Talk {...this.props} />
    return (
        <Discussion {...this.props} />
    );
  }

  render () {
    const { index } = this.state
      return (
          <View style={styles.container}>
            <View style={styles.tabContainer}>
              <TouchableHighlight
                underlayColor='transparent'
                style={styles.buttonContainer}
                onPress={() => this.updateIndex(0)}
              >
                <View
                  style={[styles.button, getButtonStyle(0, index)]}
                >
                  <Text
                  style={styles.buttonText}>Talk Info</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
              underlayColor='transparent'
              style={styles.buttonContainer}
              onPress={() => this.updateIndex(1)}>
                <View style={[styles.button, getButtonStyle(1, index)]}>
                  <Text
                    style={styles.buttonText}>Discuss</Text>
                </View>
              </TouchableHighlight>
            </View>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={dimensions.width}
              itemWidth={dimensions.width}
              onSnapToItem={this.onSnapToItem}
            />
          </View>
      );
  }
}

function getButtonStyle(index, currentIndex) {
  const backgroundColor = Number(index) === currentIndex ? colors.primaryLight : colors.primary
  const borderBottomColor = Number(index) === currentIndex ? colors.highlight : colors.primary
  return { backgroundColor, borderBottomColor }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  button: {
    width: dimensions.width / 2,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2
  },
  buttonContainer: {
    flex: 1,

  },
  buttonText: {
    color: colors.primaryText,
    textAlign: 'center',
   
  },
  tabContainer: {
    flexDirection: 'row',
  }
})