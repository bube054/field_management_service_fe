import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/general/generalSlice";
import loginReducer from "./slices/auth/login";
import signupReducer from "./slices/auth/signup";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: [
//     "general",
//     "login",
//     "signup",
//     "persistedGeneralReducer",
//     "persistedLoginReducer",
//     "persistedSignupReducer",
//   ],
// };

// const persistedGeneralReducer = persistReducer(persistConfig, generalReducer);
// const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
// const persistedSignupReducer = persistReducer(persistConfig, signupReducer);

export const store = configureStore({
  reducer: {
    general: generalReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});

// export const persistor = persistStore(store);
