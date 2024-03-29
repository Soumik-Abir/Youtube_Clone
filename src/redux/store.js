import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import {homeVideosReducer , selectedVideoReducer, relatedVideoReducer, searchedVideosReducer, subscriptionsChannelReducer, channelVideosReducer} from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
});

export default store;

