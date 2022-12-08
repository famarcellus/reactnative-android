import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {FeedProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {PrimaryButton} from '../../components/AppButton/PrimaryButton';
import {postsData} from '../../data/postsData';
import {Post} from '../../types/post';
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
        Populated with posts from communities the user has subscribed/visited.
        This data is retrieved the user's id.{userData.userId} Listed in order
        of latest posts first.
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
