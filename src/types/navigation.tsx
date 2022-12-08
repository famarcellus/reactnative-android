import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackScreenProps} from '@react-navigation/stack';

export type NativeRootStackParamList = {
  Login: undefined;
  Dashboard: {
    userId: number;
    screen: string;
  };
};

export type LoginProps = NativeStackScreenProps<
  NativeRootStackParamList,
  'Login'
>;

export type DashboardProps = NativeStackScreenProps<
  NativeRootStackParamList,
  'Dashboard'
>;

export type TabParamList = {
  Home: undefined;
  Messages: {sortMethod: string};
};

export type MessagesProps = StackScreenProps<TabParamList, 'Messages'>;

export type FeedProps = StackScreenProps<HomeStackParamList, 'Feed'>;

export type PostDetailsProps = StackScreenProps<
  HomeStackParamList,
  'PostDetails'
>;

export type HomeStackParamList = {
  Feed: undefined;
  PostDetails: {postId: number; title: string; commentsAmount: number};
};
