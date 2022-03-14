import { StyleSheet, Text, View, Platform, Modal } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';

// * Local imports
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';
import CardList from './components/CardList';
import Feed from './screens/Feed';
import CommentInput from './components/CommentInput';
import Comments from './screens/Comments';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

const ImageFeedApp = () => {

  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(async () => {
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY,
      );

      setCommentsForItem(selectedItemId ? JSON.parse(commentsForItem) : {});
    } catch (e) {
      console.log('Failed to load comments');
    }

    return () => {}

  }, [])


  const onSubmitComment = text => {
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    setCommentsForItem(updated);

    try {
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.log('Failed to save comment', text, 'for', selectedItemId);
    }

  }

  const openCommentScreen = id => {
    setShowModal(true);
    setSelectedItemId(id);
  }
  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  }

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={closeCommentScreen}
      >
        <Comments
          style={styles.comments}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </View>
  )
}

export default ImageFeedApp

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11 ? Constants.statusBarHeight : 0,
  },
})