import React from 'react';
import {Text} from 'react-native';

import {PostDetailsProps} from '../../types/navigation';
import PageContainer from '../PageContainer';
import {PrimaryButton} from '../../components/AppButton/PrimaryButton';

export const PostDetails = ({route, navigation}: PostDetailsProps) => {
  const {postId, title, commentsAmount} = route.params;
  return (
    <PageContainer>
      <Text>Post Id - {postId}</Text>
      <Text>Title - {title}</Text>
      <Text>Amount of comments - {commentsAmount}</Text>
      <Text>Use Post Id to fetch post data from api such as comments</Text>
    </PageContainer>
  );
};
