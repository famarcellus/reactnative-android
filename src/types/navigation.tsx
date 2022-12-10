import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackScreenProps} from '@react-navigation/stack';

export type NativeRootStackParamList = {
  Login: undefined;
  Dashboard: {
    screen: string;
  };
};

export type TabParamList = {
  Home: undefined;
  Messages: {sortMethod: string};
};

export type HomeStackParamList = {
  Feed: undefined;
  PostDetails: {postId: number; title: string; commentsAmount: number};
};

export type MessagesStackParamList = {
  Inbox: undefined;
  MessageDetails: {contactId: number; contactName: string};
};

export type LoginProps = NativeStackScreenProps<
  NativeRootStackParamList,
  'Login'
>;

export type DashboardProps = NativeStackScreenProps<
  NativeRootStackParamList,
  'Dashboard'
>;

export type FeedProps = StackScreenProps<HomeStackParamList, 'Feed'>;

export type PostDetailsProps = StackScreenProps<
  HomeStackParamList,
  'PostDetails'
>;

export type InboxProps = StackScreenProps<MessagesStackParamList, 'Inbox'>;

export type MessageDetailsProps = StackScreenProps<
  MessagesStackParamList,
  'MessageDetails'
>;
