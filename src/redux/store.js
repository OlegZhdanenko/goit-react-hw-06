import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ContactsSlice from "../redux/contactsSlice";
import  selectNameFilter  from "./filtersSlice";

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ["items"]
};
const filtersPersistConfig = {
    key: 'filters',
    storage,
    whitelist: ["name"]
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, ContactsSlice)
const persistedFiltersReducer= persistReducer(filtersPersistConfig, selectNameFilter)
export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: persistedFiltersReducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});
export const persistor = persistStore(store);