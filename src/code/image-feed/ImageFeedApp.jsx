import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

// * Local imports
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';
import CardList from './components/CardList';
import Feed from './screens/Feed';
import CommentInput from './components/CommentInput';

const ImageFeedApp = () => {

  const items = [
    { id: 0, author: 'Andranik Grigoryan' },
    { id: 1, author: 'Dmitri Nikiforov' },
  ];

  return (
    <View style={styles.container}>
      <CommentInput text='12345' onSubmit={()=>{}} />
      <Feed
        style={styles.feed}
      />
    </View>
  )
}

export default ImageFeedApp

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight 
        : 0,
  },
})