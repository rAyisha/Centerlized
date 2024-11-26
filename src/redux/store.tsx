import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducers } from './mainReducers';

const resetStoreActionType = 'main/resetStore';

const combinedReducer = combineReducers(reducers);
export const rootReducer = (state: any, action: any) => {
  if (action.type === resetStoreActionType) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export const resetStore = () => {
  store.dispatch({ type: resetStoreActionType });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
