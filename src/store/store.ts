import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { defaultApi } from "api/default";

export const store = configureStore({
  reducer: {
    // Adicione os reducers específicos aqui, se houver
    [defaultApi.reducerPath]: defaultApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(    defaultApi.middleware
    ),
});

// Configuração para escutar ações do RTK Query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
