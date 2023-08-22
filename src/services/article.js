/* Imports necessary functions from the @reduxjs/toolkit/query/react package, 
which is part of Redux Toolkit's data-fetching capabilities. */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

/* Defines an API slice named articleApi using the createApi function. 
This API slice is designed to interact with an article summarization API provided by RapidAPI. */

export const articleApi = createApi({
    reducerPath: 'articleApi', // Specifies the name of the reducer within the Redux store.
   /* Configures the base query used for making network requests. It sets up the base URL 
   and headers for requests to the article summarization API. The headers include the 
   RapidAPI key and host information. */
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '966f5eb66amsh1b879504a4812e2p1d3c9ejsn56703de60a48');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    /* Configures the available endpoints for the API. In this case, it defines a single query 
    endpoint named getSummary. */
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;

