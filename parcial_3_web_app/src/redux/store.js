import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'

import user from '././slices/userSlice';

export const store = configureStore({
    reducer: {
        user
    }
});






//usuarioCertificacion

