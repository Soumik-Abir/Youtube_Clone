import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';
import {homeVideosReducer} from './reducers/videos.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
});

export default store;

