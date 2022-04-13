import { configureStore } from '@reduxjs/toolkit';
import dataObjs from './dataObjs';

export const store = configureStore({
  reducer: {
    dataObjs: dataObjs,
  }
});
