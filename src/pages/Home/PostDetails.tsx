import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PostDetailsProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import commonStyle from '../../style/common.style';

export const PostDetails = ({route, navigation}: PostDetailsProps) => {
  const {postId, title, commentsAmount} = route.params;
  return (
    <PageContainer>
      <Text>Post Id - {postId}</Text>
      <Text style={commonStyle.h1Text}>{title}</Text>
      <View>
        <Text>{commentsAmount} comments</Text>
        <Text style={styles.explanation}>
          On mount, use Post Id to fetch post data from api such as post title
          edits, updated comments amount, and actual comments from other users.
        </Text>
        <Text style={styles.explanation}>
          Comments will be populated below after fetch is complete.
        </Text>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  explanation: {
    marginTop: 30,
  },
});
