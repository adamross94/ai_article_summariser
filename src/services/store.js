/* Imports the configureStore function from @reduxjs/toolkit and the previously defined articleApi 
from article.js. */

import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

/* The store variable is created by calling configureStore and passing in an object with configuration options.
The reducer property configures the root reducer of the store. In this case, it assigns the articleApi.reducer 
to a specific key in the state. This key is determined by articleApi.reducerPath, which corresponds to the 
reducer path defined in the articleApi setup. The middleware property configures the middleware pipeline 
of the store. The code first retrieves the default middleware using getDefaultMiddleware. Then, it appends 
the middleware from the articleApi slice using the .concat(articleApi.middleware) method. This includes 
middleware for handling API requests, responses, and caching. */

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})