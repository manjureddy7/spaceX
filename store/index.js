import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import missionReducer from './slices/mission';

export default configureStore({
    reducer: {
        missions: missionReducer
    },
    middleware: getDefaultMiddleware()
});