import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {FeedProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {postsData} from '../../data/postsData';
import {Post} from '../../models/post';
import commonStyle from '../../style/common.style';
import {SecondaryButton} from '../../components/AppButton/SecondaryButton';
import {userData} from '../../data/userData';

type FeedScreenNavigationProp = FeedProps['navigation'];

function goToPostDetails(post: Post, navigation: FeedScreenNavigationProp) {
  const {postId, title, commentsAmount} = post;

  navigation.navigate('PostDetails', {
    postId: postId,
    title: title,
    commentsAmount: commentsAmount,
  });
}

export const Feed = ({route, navigation}: FeedProps) => {
  return (
    <PageContainer>
      <Text style={commonStyle.h1Text}>Feed Page</Text>
      <Text style={styles.explanation}>
        On mount by using useEffect, populate with posts from communities the
        user has subscribed/visited. This is done by using the user's id to
        retreieve the data from an api. Current userId: {userData.userId}. Posts
        are listed in order of latest posts first.
      </Text>
      <Text>Below this line, there are the lists of posts.</Text>
      {postsData.map(post => {
        const {title, commentsAmount, postId} = post;
        return (
          <View>
            <View style={styles.postContainer}>
              <SecondaryButton
                key={postId}
                onPress={() => goToPostDetails(post, navigation)}
                buttonText={`${title}`}
              />
              <Text>{commentsAmount} comments</Text>
            </View>
          </View>
        );
      })}
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  explanation: {
    marginTop: 50,
    marginBottom: 50,
  },
  postContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
});
