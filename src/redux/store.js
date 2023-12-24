// store.js

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { statisticsReducer } from './statistics/statisticsSlice';
import diaryReducer from './diary/diarySlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: ['user'],
};
const diaryPersistConfig = {
  key: 'diary',
  storage,
  whitelist: ['breakfast', 'lunch', 'dinner', 'snack'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    statistics: persistReducer(statisticsPersistConfig, statisticsReducer),
    diary: diaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
