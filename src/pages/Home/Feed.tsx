import React from 'react';
import {Text, View} from 'react-native';

import {FeedProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {PrimaryButton} from '../../components/AppButton/PrimaryButton';
import {postsData} from '../../data/postsData';
import {Post} from '../../types/post';

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
      <Text>Feed Page displays posts to the user.</Text>
      <Text>
        User's Feed page is populated with posts from communities they've
        subscribed to and/or visited. This data is retrieved using their userId
        data. Listed in order of latest posts first.
      </Text>
      <Text>Below this line, there are the lists of posts.</Text>
      {postsData.map(post => {
        const {title, commentsAmount, postId} = post;
        return (
          <View>
            <PrimaryButton
              key={postId}
              loading={false}
              onPress={() => goToPostDetails(post, navigation)}
              buttonText={`${title}`}
            />
            <Text>{commentsAmount} comments</Text>
          </View>
        );
      })}
    </PageContainer>
  );
};
