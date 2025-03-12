import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Head from 'next/head';
import user from '../reducers/user'
import likes from '../reducers/likes';
import profils from '../reducers/profils';

import '../styles/globals.css';
const reducers = combineReducers({ user,likes,profils });
const persistConfig = { key: 'giveachance', storage };


const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });


 const persistor = persistStore(store);


function App({ Component, pageProps }) {


 
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Head>
        <title>GIVE A CHANCE</title>
      </Head>
     
      <Component {...pageProps} />

      </PersistGate>
      
    </Provider>
  );
}

export default App;

