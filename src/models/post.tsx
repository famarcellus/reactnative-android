export type Post = {
  postId: number;
  title: string;
  communityName: string;
  commentsAmount: number;
  netVotes: number;
  upvoted: boolean;
  downvoted: boolean;
  sharesAmount: number;
  imageUrl: string | undefined;
  timePosted: string;
};

// 4 Types of posts...
// Type #1: Title and Description (truncated if too long)
// Type #2: Title, Description, and Small Image on right side of
// Type #3: Title and Full Sized Image/Video/GIF.
// ----- If more than 1 image, user can scroll through multiple images
// ----- Video can be set to autoplay or not and has visible volume mute/unmute button
// Type #4: Title and Small Thumbnail Image/Video
// Type #5: Only Title

// [Character Limits]
// Post Title: 300 characters
// Description: 240 characters

// Behaviors
// Clicking an Image/Video/Gif, enlarges it to fill the width of the screen
// Clicking a post title or description, brings user to page with post and comments
