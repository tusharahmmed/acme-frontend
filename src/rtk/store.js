import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './RootReducer'
import { baseApi } from './features/api/baseApi'

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),

})